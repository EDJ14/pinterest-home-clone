CREATE DATABASE IF NOT EXISTS dbTEST10;
CREATE USER 'testuser'@'%' IDENTIFIED BY 'lamepassword';
GRANT ALL PRIVILEGES ON dbTEST10.* TO 'testuser'@'%'; 
UPDATE mysql.user SET plugin = 'mysql_native_password' WHERE user = 'root'; 
flush privileges;