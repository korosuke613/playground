#!/usr/bin/env bash

./aws_signing_helper credential-process \
--certificate $CERTIFICATE_FILE_PATH \
--private-key $PRIVATE_KEY_FILE_PATH \
--trust-anchor-arn $TRUST_ANCHOR_ARN \
--profile-arn $PROFILE_ARN \
--role-arn $ROLE_ARN > aws_credentials.json

docker run --rm -it \
  -v $PWD/aws_credentials.json:/aws_credentials.json \
  -v $PWD/aws_config:/root/.aws/config \
  amazon/aws-cli $@
