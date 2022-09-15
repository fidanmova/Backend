# Create a Database in MySQL Server

## In CLI Mode
Login to mysql in Terminal with `root` user:
```sh
mysql -u root -p
```
then use this SQL To create a new Database:
```sh
mysql> CREATE DATABASE <DATABASE_NAME>;
# Replase <DATABASE_NAME> with the name of this new database
```
### Recommended Step:
Its recommended to create a new `user` specific for this database, so we can manage this database with this user.

To create a new user:
```sh
# Make sure that you login as root to create a new user
mysql> CREATE USER 'NEW_USER'@'localhost' IDENTIFIED BY 'PASSWORD_FOR_NEW_USER';
```
Then asign this user and give privileges to control the new database.
```sh
mysql> GRANT SELECT, INSERT, UPDATE, DELETE, CREATE, INDEX, DROP, ALTER, CREATE TEMPORARY TABLES, REFERENCES, LOCK TABLES ON NEW_DATABASE.* TO 'NEW_USER'@'localhost';
```
Then Update privileges
```sh
mysql> FLUSH PRIVILEGES;
```
then you can logout as root and login again with this new user, this new user can manage ONLY the new database that we created.
```sh
mysql -u NEW_USER -p
```
You can login with this user also in `Workbench` or with `phpmyadmin`, then you can access and manage ONLY this new database, this procedure is recommended to secure other databases in `MySQL Server`.