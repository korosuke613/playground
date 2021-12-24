package test

import (
	"fmt"
	tfjson "github.com/hashicorp/terraform-json"
	"github.com/stretchr/testify/assert"
	"testing"
)

func TestTerraformPlan(t *testing.T) {
	t.Parallel()

	plan, err := parsePlanJson("./plan.json")
	if err != nil {
		assert.Fail(t, err.Error())
	}

	resourceChanges := getResourceChanges(plan)


	// 特定のActionがあるかどうか
	createResources := searchAction(resourceChanges, tfjson.ActionCreate)
	if createResources != nil{
		assert.Fail(t, fmt.Errorf("found resource to %v. %v", tfjson.ActionCreate, createResources).Error())
	}

	// 特定のTypeがあるかどうか
	_, withoutTypes := searchResourceType(resourceChanges, "local_file")
	if len(withoutTypes) != 0{
		assert.Fail(t, "%v\n", withoutTypes)
	}

	// 特定のModuleがあるかどうか
	_, withoutModules := searchResourceModule(resourceChanges, "file")
	if len(withoutModules) != 0{
		assert.Fail(t, "%v\n", withoutModules)
	}
}
