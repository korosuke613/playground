#!/usr/bin/env bash

curl https://s3.amazonaws.com/roles-anywhere-credential-helper/CredentialHelper/latest/darwin_amd64/aws_signing_helper \
  --output aws_signing_helper
chmod +x ./aws_signing_helper

echo You must export the environment variables below.
echo
cat <<EOT
export CERTIFICATE_FILE_PATH=
export PRIVATE_KEY_FILE_PATH=
export TRUST_ANCHOR_ARN=
export PROFILE_ARN=
export ROLE_ARN=
EOT
