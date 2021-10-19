reset:
	docker-compose down
	docker-compose up -d
	npx prisma generate
	npx prisma db push
