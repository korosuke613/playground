# Atlantis on k8s

ref: Atlantisをk8s上に立てる
https://zenn.dev/korosuke613/scraps/b2d7b8f44ae7f6

```console
❯ kubectl create secret generic atlantis-vcs \
    --from-literal=token="${ATLANTIS_GITHUB_PAT}" \
    --from-literal=webhook-secret="${ATLANTIS_WEBHOOK_SECRET}"
secret/atlantis-vcs created
```

```console
❯ kubectl create secret generic atlantis-basic \
    --from-literal=username="${ATLANTIS_WEB_USERNAME}" \
    --from-literal=password="${ATLANTIS_WEB_PASSWORD}"
secret/atlantis-basic created
```

```console
❯ kubectl apply -f service.yaml -f statefulset.yaml
service/atlantis created
statefulset.apps/atlantis created
```
