---
layout: post
title: "DOCKER HELP"
---

# Setup Docker ECR Login
```sh
alias dockercred=vi ~/docker/config.json
```
```json
{
  "auths": {
    "https://index.docker.io/v1/": {}
  },
  "credsStore": "desktop",
  "credHelpers": {
    "[AWS_ACCOUNT].dkr.ecr.ap-southeast-1.amazonaws.com": "ecr-login",
    "public.ecr.aws": "ecr-login"
  },
  "currentContext": "desktop-linux",
  ...
}
```

# Docker folder structure
```
.
├── Dockerfile
├── docker-compose.yml
├── package-lock.json
├── package.json
└── scripts
    └── run-docker.sh
```
### Dockerfile
```Dockerfile
FROM node:alpine@sha256:3b4e5fe02bb50e5b16f0595a0ec5a67474c065dec19cc4f31aaa0b4dab65e563

WORKDIR /app

COPY package*.json .

RUN npm install

USER node
```
### docker-compose.yml
```yaml
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    ports: [3000:3000]
    volumes:
      - .:/app
```
