#!/bin/bash

set -euxo pipefail

CFN_TEMPLATE=Ecs.yaml
CFN_STACK_NAME=Ecs

aws cloudformation update-stack \
  --disable-rollback \
  --stack-name ${CFN_STACK_NAME} \
  --template-body file://${CFN_TEMPLATE} \
  --capabilities CAPABILITY_NAMED_IAM
