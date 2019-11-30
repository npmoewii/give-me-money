# FROM mysql:latest
FROM jsurf/rpi-mariadb:latest

ENV MYSQL_ROOT_PASSWORD 1234

ADD gmm_user.sql /docker-entrypoint-initdb.d/
ADD gmm_debt.sql /docker-entrypoint-initdb.d/
ADD gmm_transaction.sql /docker-entrypoint-initdb.d/

# Add mock data
ADD mock_data.sql /docker-entrypoint-initdb.d/

EXPOSE 3306

RUN chmod -R +x /docker-entrypoint-initdb.d/

# CMD ["mysqld", "--character-set-server=utf8mb4", "--collation-server=utf8mb4_unicode_ci"]

