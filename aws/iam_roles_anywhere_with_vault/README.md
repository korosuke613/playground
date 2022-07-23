# Try IAM Roles Anywhere with Vault
ref: https://dev.classmethod.jp/articles/hashicorp-vault-pki-for-iam-role-anywhere

## Setup
```console
./setup_vault.sh
```

Generate ca.pem, cert.pem, private.key.
Read ca.pem, and setup Trust anchor in AWS console.

```console
./setup_aws.sh
```

## Run
```
./awscli.sh sts get-caller-identity
```
