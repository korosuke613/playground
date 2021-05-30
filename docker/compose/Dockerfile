FROM golang:1.16 as build

WORKDIR /work

COPY main.go go.mod /work/

RUN go get -d -v ./...
RUN go build -o /go/bin/app

FROM gcr.io/distroless/base-debian10

COPY --from=build /go/bin/app /

ENTRYPOINT ["./app"]
