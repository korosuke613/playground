# syntax=docker.io/docker/dockerfile:1.3-labs

FROM ubuntu

RUN <<EOF
apt-get update
apt-get install -y \
  curl \
  jq
rm -rf /var/lib/apt/lists/*
EOF
