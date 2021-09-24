#!/bin/bash

CFN_STACK_NAME=iamRoleForGha

aws cloudformation delete-stack --stack-name ${CFN_STACK_NAME}
