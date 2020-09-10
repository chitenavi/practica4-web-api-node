<h1 align="center">Welcome to API Nodepop 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D10.22.0-blue.svg" />
  <a href="http://localhost:3000/apidoc/" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://twitter.com/chitenavi" target="_blank">
    <img alt="Twitter: chitenavi" src="https://img.shields.io/twitter/follow/chitenavi.svg?style=social" />
  </a>
</p>

> API developed under Node and MongoDB of a service for buying and selling second-hand products. The service maintains advertisements, where you can control them using methods described in the documentation.
>
> The app deploys a front-end home page, where you can view an example sale web and also the API documentation
>
> Everything is generated using the express-generator module, with some changes in the file structure under the MVC architecture.

### 🏠 [Homepage](http://localhost:3000/ 'Default')

## Prerequisites

- node >=10.22.0

## API Documentation

You can see all the API documentation at http://localhost:3000/apidoc/ (default path) when you start the application.

## Install

```sh
npm install
```

## Configure environment variables

Copy .env.example to .env and edit your settings before first run.

```sh
cp .env.example .env
```

## Load initial data

**Warning! this script delete database contents before load.**
Use in production only at first deployment.
You can load initial data to database with next command:

```sh
npm run initdb
```

## Usage

Start the application in production:

```sh
npm run start
```

## Development start

Start the application in development mode, use _nodemon_ to monitor changes in the code:

```sh
npm run watch:dev
```

## How to start a local mongodb instance for deveploment

```sh
./bin/mongod --dbpath ./data/db --directoryperdb
```

## Author

👤 **Ivan Chinea**

- Twitter: [@chitenavi](https://twitter.com/chitenavi)
- Github: [@chitenavi](https://github.com/chitenavi)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
