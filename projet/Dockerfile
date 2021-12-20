FROM mysql
ENV MYSQL_ROOT_PASSWORD password123
EXPOSE 3306
RUN mysql -uroot -p${MYSQL_ROOT_PASSWORD} && create database dbproject