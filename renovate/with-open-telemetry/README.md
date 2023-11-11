# renovate with open-telemetry

```console
docker compose up -d

OTEL_EXPORTER_OTLP_ENDPOINT=http://localhost:4318 \
RENOVATE_TOKEN=$(gh auth token) \
npx renovate --dry-run korosuke613/playground
```
