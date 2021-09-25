package test

import (
	"encoding/json"
	"fmt"
	tfjson "github.com/hashicorp/terraform-json"
	"io/ioutil"
	"regexp"
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

func parsePlanJson(planFilePath string) (*tfjson.Plan, error) {
	planJson, err := ioutil.ReadFile(planFilePath)
	if err != nil {
		return nil, fmt.Errorf("fail open %v: %v", planFilePath, err)
	}

	plan := tfjson.Plan{}

	if err := json.Unmarshal(planJson, &plan); err != nil {
		return nil, fmt.Errorf("fail parse %v: %v", planFilePath, err)
	}

	return &plan, nil
}

func getResourceChanges(plan *tfjson.Plan) map[string]*tfjson.ResourceChange {
	resourceChanges := map[string]*tfjson.ResourceChange{}

	for _, change := range plan.ResourceChanges {
		resourceChanges[change.Address] = change
	}

	return resourceChanges
}

func getActions(resourceChanges map[string]*tfjson.ResourceChange) map[string][]string {
	actions := map[string][]string{}
	for _, resource := range resourceChanges {
		action := getActionType(&resource.Change.Actions)
		if _, ok := actions[action]; ok {
			actions[action] = append(actions[action], resource.Address)
		} else {
			actions[action] = []string{resource.Address}
		}
	}

	return actions
}

func searchResourceType(resourceChanges map[string]*tfjson.ResourceChange, resourceType string) (map[string][]tfjson.ResourceChange, map[string][]tfjson.ResourceChange) {
	foundTypes := map[string][]tfjson.ResourceChange{}
	withoutTypes := map[string][]tfjson.ResourceChange{}

	for _, resource := range resourceChanges{
		if resource.Change.Actions.NoOp() {
			continue
		}
		if regexp.MustCompile(resourceType).Match([]byte(resource.Type)){
			foundTypes[resource.Type] = append(foundTypes[resourceType], *resource)
		}else {
			withoutTypes[resource.Type] = append(withoutTypes[resourceType], *resource)
		}
	}
	return foundTypes, withoutTypes
}

func searchResourceModule(resourceChanges map[string]*tfjson.ResourceChange, resourceModule string) (map[string][]tfjson.ResourceChange, map[string][]tfjson.ResourceChange) {
	foundModule := map[string][]tfjson.ResourceChange{}
	withoutModule := map[string][]tfjson.ResourceChange{}

	for _, resource := range resourceChanges{
		if resource.Change.Actions.NoOp() {
			continue
		}
		if regexp.MustCompile(resourceModule).Match([]byte(resource.ModuleAddress)){
			foundModule[resource.Type] = append(foundModule[resourceModule], *resource)
		}else {
			withoutModule[resource.Type] = append(withoutModule[resourceModule], *resource)
		}
	}
	return foundModule, withoutModule
}
