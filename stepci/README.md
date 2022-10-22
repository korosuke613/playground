# stepci
https://github.com/stepci/stepci

## Getting started

command:
```console
docker run -v "$(pwd)"/tests:/tests ghcr.io/stepci/stepci tests/example_com.yaml
```

result:
```console
❯ docker run -t -v "$(pwd)"/tests:/tests ghcr.io/stepci/stepci tests/example_com.yaml

 GET request  PASSED  in 0.967s

Request

 GET  https://example.com/  200 OK

Checks

Status
✔ 200

✔ example passed in 0.967s

✔ Status Check (tests/workflow.yaml) passed in 1.147s
```

## Example

### Test my server 
```console
docker run -p 8080:80 nginx
```

```console
docker run -t -v "$(pwd)"/tests:/tests ghcr.io/stepci/stepci --net=host tests/local_nginx.yaml
```

```console
❯ docker run -t -v "$(pwd)"/tests:/tests ghcr.io/stepci/stepci --net=host tests/local_nginx.yaml

 GET request  PASSED  in 0.306s

Request

 GET  http://host.docker.internal:8080/  200 OK

Checks

Status
✔ 200

✔ example passed in 0.306s

✔ Status Check (tests/local_nginx.yaml) passed in 0.446s
```

### for gRPC
```console
docker run --rm -p 13333:13333 --name grpshuffle-server grpshuffle-server
```

```console
docker run -t --net=host -v "$(pwd)":/work ghcr.io/stepci/stepci /work/tests/local_grpc.yaml
```

```console
❯ docker run -t -v "$(pwd)":/work ghcr.io/stepci/stepci --net=host /work/tests/local_grpc.yaml

 gRPC request  PASSED  in 0.4s

Request

 Compute  host.docker.internal:13333  Shuffle

Checks

JSON
✔ [object Object]

✔ example passed in 0.4s

✔ gRPC API (/work/tests/local_grpc.yaml) passed in 0.509s
```
