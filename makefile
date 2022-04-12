up-build:
	docker-compose up --build
down:
	docker-compose down
stop:
	docker-compose stop
up-d:
	docker-compose up -d
log:
	docker log -f -t