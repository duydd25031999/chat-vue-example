up-build:
	docker-compose up --build
up:
	docker-compose up
down:
	docker-compose down
start:
	docker-compose start
stop:
	docker-compose stop
up-d:
	docker-compose up -d
log:
	docker-compose logs -f -t