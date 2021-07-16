# nodejs-example-api

Repositório utilizado para demonstrar alguns exemplos em uma apresentação.

- NodeJS
- MySQL
- [Docker](https://docs.docker.com/get-started/)
- [Eslint](https://github.com/eslint/eslint) com Standard
- [Mocha](https://github.com/mochajs/mocha) para testes
- [Sinon](https://github.com/sinonjs/sinon) para Mocks & Stubs
- [Chai](https://github.com/chaijs/chai) para Assertions
- [Winston](https://github.com/winstonjs/winston) para logs
- [Ajv](https://ajv.js.org/) para validar requests
- [Container para IoC](https://gustv0.dev/container-para-inversao-de-controle-e-injecao-de-dependencias)

## Executar

```sh
cp .env.example .env
```

```sh
make docker/start
```

Criar banco e tabelas:
```sh
make run-queries
```

Testes:
```sh
make tests
```

Linter:
```sh
make lint
```

## Endpoints

Criar produtos (Assíncrono)
```
curl --location --request POST 'http://localhost:9000/v1/products' \
--header 'Content-Type: application/json' \
--data-raw '{
    "products": [
        {
            "name": "Test 1"
        },
        {
            "name": "Test 2"
        },
        {
            "name": "Test 3"
        }
    ]
}'
```

Listar produtos (Síncrono)
```
curl --location --request GET 'http://localhost:9000/v1/products'
```
