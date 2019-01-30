# Koa Typescript Babel Boilerplate API
> NodeJS blog API Boilerplate based on KoaJS


![[node][node-image]][node-image]
[![Build Status][travis-image]][travis-url]
![Licence][licence]

## Installation

OS X & Linux (make sure that you've got ssl certificate files first, instruction below):

```
npm install
npm run build
npm run start-prod
```

## Generate SSL certificate

To generate local certificate you have to install [openssl](https://www.openssl.org/). If that is done run `./generate-openssl.sh` to create certificate files. You have to follow instructions during generation.

If you want to generate ssl certificate for your production environment you should use one of many solutions like [Let's Encrypt](https://letsencrypt.org/).

At the end you need `server.crt` and `server.key` files to run server :)

## Database migrations

To run all migrations just run:
```
npm run db-migration
```

If you want to upgrade to specific version use:
```
npm run db-migration up <migration-version-name>
```

If you want to downgrade to version use:
```
npm run db-migration down <migration-version-name>
```

If you want to create migration (follow [ttps://github.com/tj/node-migrate#creating-migrations](https://github.com/tj/node-migrate#creating-migrations)):
```
npm run db-migration create <name>
```

You can always check your current version in `.migrate` file or run:
```
npm run db-migration list
```

## Development setup

To run dev environment:

```
npm run start
```

## Testing

Test env is using Jest, if you want to run tests just call:

```
npm run test
```

or (to run without watcher and with test coverage report)
```
npm run test-coverage
```

## Release History

* 0.0.1
    * Work in progress

## Meta

Kemal Erdem – kemalpiro@gmail.com

Distributed under the MIT license.

## Contributing

1. Fork it (<https://github.com/burnpiro/hapi-blog-api-v2/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[node-image]: https://img.shields.io/badge/node-10.x-brightgreen.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[licence]: https://img.shields.io/github/license/mashape/apistatus.svg