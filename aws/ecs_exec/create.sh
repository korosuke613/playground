#!/bin/bash

CFN_TEMPLATE=Ecs.yaml
CFN_STACK_NAME=Ecs

aws cloudformation create-stack \
  --stack-name ${CFN_STACK_NAME} \
  --template-body file://${CFN_TEMPLATE} \
  --capabilities CAPABILITY_NAMED_IAM \
  --disable-rollback
