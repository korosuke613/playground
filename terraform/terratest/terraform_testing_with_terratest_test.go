package test

import (
	"fmt"
	tfjson "github.com/hashicorp/terraform-json"
	"path/filepath"
	"testing"

	"github.com/gruntwork-io/terratest/modules/terraform"
	"github.com/gruntwork-io/terratest/modules/test-structure"
	"github.com/stretchr/testify/assert"
)

func getActionType(actions *tfjson.Actions) string {
	switch {
	case actions.NoOp():
		return string(tfjson.ActionNoop)
	case actions.Create():
		return string(tfjson.ActionCreate)
	case actions.Read():
		return string(tfjson.ActionRead)
	case actions.Update():
		return string(tfjson.ActionUpdate)
	case actions.Delete():
		return string(tfjson.ActionDelete)
	case actions.CreateBeforeDestroy():
		return "create-before-destroy"
	case actions.DestroyBeforeCreate():
		return "destroy-before-create"
	case actions.Replace():
		return "replace"
	default:
		panic("detected a non-existent Action")
	}
}

func TestTerraformWithTerratest(t *testing.T) {
	t.Parallel()

	// Make a copy of the terraform module to a temporary directory. This allows running multiple tests in parallel
	// against the same terraform module.
	tfDir := test_structure.CopyTerraformFolderToTemp(t, ".", ".")
	planFilePath := filepath.Join(tfDir, "plan.out")

	terraformOptions := terraform.WithDefaultRetryableErrors(t, &terraform.Options{
		TerraformDir: ".",
		PlanFilePath: planFilePath,
	})

	plan := terraform.InitAndPlanAndShowWithStruct(t, terraformOptions)

	terraform.RequirePlannedValuesMapKeyExists(t, plan, "local_file.example")
	localFileResource := plan.ResourceChangesMap["local_file.example"]
	willDelete := localFileResource.Change.Actions.Delete()
	assert.Equal(t, false, willDelete)

	actions := map[string][]string{}
	for _, resource := range plan.ResourceChangesMap {
		action := getActionType(&resource.Change.Actions)
		if _, ok := actions[action]; ok {
			actions[action] = append(actions[action], resource.Address)
		} else {
			actions[action] = []string{resource.Address}
		}
	}

	if _, ok := actions["Delete"]; ok {
		assert.Fail(t, fmt.Sprintf("Found resource to Delete. %v", actions["Delete"]))
	}
}
