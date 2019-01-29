# Hapi Blog API
> NodeJS blog API Boilerplate based on HapiJS and MongoDB


![[node][node-image]][node-image]
[![Build Status][travis-image]][travis-url]
![Licence][licence]

## Installation

OS X & Linux:

```
yarn
yarn build
yarn run start-prod
```

## Database migrations

To run all migrations just run:
```
yarn run db-migration
```

If you want to upgrade to specific version use:
```
yarn run db-migration up <migration-version-name>
```

If you want to downgrade to version use:
```
yarn run db-migration down <migration-version-name>
```

If you want to create migration (follow [https://github.should typescript be a dev dependencycom/tj/node-migrate#creating-migrations](https://github.com/tj/node-migrate#creating-migrations)):
```
yarn run db-migration create <name>
```

You can always check your current version in `.migrate` file or run:
```
yarn run db-migration list
```

## Development setup

To run dev environment:

```
yarn run start
```

## Testing

Test env is using Jest, if you want to run tests just call:

```
yarn run test
```

or (to run without watcher and with test coverage report)
```
yarn run test-coverage
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