docker/stop:
	docker compose down

docker/build:
	docker compose up -d --build

docker/start:
	docker compose up -d

lint:
	docker exec nodejs-example-api npm run lint

tests:
	docker exec nodejs-example-api npm run test

run-queries:
	cat queries.sql | docker exec -i nodejs-example-mysql mysql -uroot -pmysql
