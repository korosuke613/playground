#!/bin/bash

CFN_TEMPLATE=Ecs.yaml
CFN_STACK_NAME=Ecs


aws cloudformation deploy \
  --stack-name ${CFN_STACK_NAME} \
  --template-file ${CFN_TEMPLATE} \
  --capabilities CAPABILITY_NAMED_IAM # IAMユーザ作成に必要
