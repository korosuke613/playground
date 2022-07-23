#!/usr/bin/env bash

set -euo pipefail

if [[ ! -f vault ]]; then
  curl -o vault.zip https://releases.hashicorp.com/vault/1.11.1/vault_1.11.1_darwin_arm64.zip
  unzip vault.zip
  rm -f vault.zip
fi

./vault server -dev > /dev/null 2>&1 &

vault_pid=$!
echo [INFO] vault pid is $vault_pid

trap 'kill $vault_pid' EXIT

sleep 3

export VAULT_ADDR='http://127.0.0.1:8200'

echo [INFO] Generate ca.pem
./vault secrets enable pki > /dev/null
./vault secrets tune -max-lease-ttl=8760h pki > /dev/null
./vault write pki/root/generate/internal \
  common_name=my-website.com \
  ttl=8760h > /dev/null 2>&1
./vault read -format json /pki/cert/ca | jq -r .data.certificate > ca.pem

echo [INFO] Generate cert.pem private.key
./vault write pki/config/urls \
  issuing_certificates="http://127.0.0.1:8200/v1/pki/ca" \
  crl_distribution_points="http://127.0.0.1:8200/v1/pki/crl" > /dev/null
./vault write pki/roles/example-dot-com \
  allowed_domains=my-website.com \
  allow_subdomains=true \
  max_ttl=72h > /dev/null
ISSUE_JSON=$(./vault write -format json pki/issue/example-dot-com common_name=www.my-website.com)
echo $ISSUE_JSON | jq -r .data.certificate > cert.pem
echo $ISSUE_JSON | jq -r .data.private_key > private.key

echo "[INFO] Please setup Trust anchor in AWS console."
