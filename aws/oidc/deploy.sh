#!/bin/bash

CFN_TEMPLATE=iamRoleForGha.yaml
CFN_STACK_NAME=iamRoleForGha


aws cloudformation deploy \
  --region ap-northeast-1 \
  --stack-name ${CFN_STACK_NAME} \
  --template-file ${CFN_TEMPLATE} \
  --capabilities CAPABILITY_NAMED_IAM # IAMユーザ作成に必要
