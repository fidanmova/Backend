# SQL Commands

## Basics
In SQL query or in mysql shell in terminal, after login to mysql:

```sh
# 0- create a new database:
mysql> CREATE DATABASE <DATABASE_NAME>
# 0- display all databases:
mysql> SHOW DATABASES; 
# 1- switch to database:
mysql> USE <DATABASE_NAME>;
# 3- create a new table:
mysql> CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
   ....
); 
# 2- display all tables in database:
mysql> SHOW TABLES;
# 3- display all columns in table:
mysql> SHOW COLUMNS FROM <TABLE_NAME>
```
> When a new table been created, recommended to create the first column `id` with `INT` datatype and primary_key Auto_increment, this will be the identifier for each new record.

## INSERT
```sh
mysql> INSERT INTO <TABLE_NAME> (`column1`, `column2`, ..., `column_n`) VALUES ("value1", "value2", ..., "value_n");
# The order for the column is IMPORTANT.
# Datatype IMPORTANT.
# You don't have to insert `id`, this will be added automaticly by MySQL.
# Insert multiple: repeat insert query several time ):
```

## SELECT
```sh
mysql> SELECT * FROM <TABLE_NAME>;
# Get all columns with values use *.
# Get a specific columns:
mysql> SELECT column1, column2,... FROM <TABLE_NAME>;

# Order data:
mysql> SELECT * FROM <TABLE_NAME> ORDER BY COLUMN_NAME;
# The ORDER BY keyword sorts the records in ascending order by default. To sort the records in descending order, use the DESC keyword OR ASC fo opposite case.

```
