## Description

This is a [Nest](https://github.com/nestjs/nest) framework TypeScript starter monorepo project repository. It has the following structure:

Service A
Service B
Common lib

Each service has its own Dockerfile that can be deployed separately.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development for service A
$ npm run start service-a

# development for service B
$ npm run start service-b

# watch mode
$ npm run start:dev service-a
$ npm run start:dev service-b

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g mau
$ mau deploy
```