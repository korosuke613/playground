#!/bin/bash

CFN_STACK_NAME=Ecs

aws cloudformation delete-stack --stack-name ${CFN_STACK_NAME}
