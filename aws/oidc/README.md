# OpenID Connect for AWS on GitHub Actions

## Setup
### Create an IAM user with the following IAM policy.
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "iam:GenerateCredentialReport",
        "iam:GenerateServiceLastAccessedDetails",
        "iam:Get*",
        "iam:List*",
        "iam:SimulateCustomPolicy",
        "iam:SimulatePrincipalPolicy",
        "cloudformation:*",
        "iam:RemoveClientIDFromOpenIDConnectProvider",
        "iam:UpdateOpenIDConnectProviderThumbprint",
        "iam:UntagOpenIDConnectProvider",
        "iam:AddClientIDToOpenIDConnectProvider",
        "iam:DeleteOpenIDConnectProvider",
        "iam:TagOpenIDConnectProvider",
        "iam:CreateOpenIDConnectProvider",
        "iam:CreateRole",
        "iam:PutRolePolicy",
        "iam:DeleteRole",
        "iam:DeleteRolePolicy"
      ],
      "Resource": "*"
    }
  ]
}
```

### Install AWS CLI
```console
brew install awscli
```

### Setting environments
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- AWS_REGION

### Deploy stack
```console
./deploy.sh
```

If failed...
```console
./delete.sh
```

## Dispatch Workflow
[oidc-for-aws.yaml](/.github/workflows/oidc-for-aws.yaml)
