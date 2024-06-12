# README #

## NestJS Token Service - Repo

### What is this repository for? ###

Identity and Access Management (IAM) system using NestJS, a powerful and scalable Node.js framework. The primary objective was to establish fine-grained control over access to various resources within a web application, ensuring data security and compliance with role-based access control (RBAC) principles. The system featured Redis integration for efficient session management and caching, Docker for streamlined development, deployment, and scaling. User credentials were securely stored in a PostgreSQL database deployed on AWS, ensuring robust and reliable data storage.

### version: 1.0.1

### How do I get set up? ###

1. Clone from repo 
2. Set up docker
3. Run the app

## Set up the repository

    sudo dnf -y install dnf-plugins-core
    sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo

## Install docker engine

     sudo dnf install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

## Start docker

    sudo systemctl start docker

## Run the app

    sudo docker compose up

# REST API

The REST API to the token service is described below.

# BaseURL

https://token.masoncruse.com

## Create a new user

### Request

`POST /authentication/sign-up/`

    curl -d '{"email":"testuser@email.com", "password":"testpassword"}' -H "Content-Type: application/json" -X POST https://token.masoncruse.com/authentication/sign-up

### Response

    HTTP/1.1 201 Created


## Create a token

### Request

`POST /authentication/sign-in/`

    curl -d '{"email":"testuser@email.com", "password":"testpassword"}' -H "Content-Type: application/json" -X POST https://token.masoncruse.com/authentication/sign-in

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json
   `{"accessToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJlbWFpbCI6InRlc3QxMUBlbWFpbC5jb20iLCJpYXQiOjE3MTgwNjc5MTQsImV4cCI6MTcxODA3MTUxNCwiYXVkIjoibG9jYWxob3N0OjMwMDAiLCJpc3MiOiJsb2NhbGhvc3Q6MzAwMCJ9.heetovlrXAumawbHtE-p5PbUDUHVzAakoIVOuPgh0QQ","refreshToken":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEwLCJyZWZyZXNoVG9rZW5JZCI6ImQ5ZjU5Y2Y3LWFiODktNGE3NS1iNzA0LTE4NGI2NjBjMjgxZSIsImlhdCI6MTcxODA2NzkxNCwiZXhwIjoxNzE4MTU0MzE0LCJhdWQiOiJsb2NhbGhvc3Q6MzAwMCIsImlzcyI6ImxvY2FsaG9zdDozMDAwIn0.fkHwN-S2fYd9P07FT0xEKHRfNOWSzNFQow3Ovv2MNx4"}`

## Request a protected resource

### Request

`GET /protected-data/`

    curl https://token.masoncruse.com/protected-data

### Response

    HTTP/1.1 401 Unauthorized
    Content-Type: application/json
    {"message":"Unauthorized","statusCode":401}

## Request a protected resource with accessToken

### Request

`GET /protected-data/`

    curl https://token.masoncruse.com/protected-data
     -H "Authorization: Bearer {accessToken}"

### Response

    HTTP/1.1 HTTP/1.1 200 OK
    Content-Type: application/json
    This action returns all protected resources