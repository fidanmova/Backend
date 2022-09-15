# MYSQL SERVER

> is an open-source relational database management system (RDBMS). Its name is a combination of "My", the name of co-founder Michael Widenius's daughter My, and "SQL", the abbreviation for Structured Query Language. A relational database organizes data into one or more data tables in which data may be related to each other; these relations help structure the data. SQL is a language programmers use to create, modify and extract data from the relational database, as well as control user access to the database. In addition to relational databases and SQL, an RDBMS like MySQL works with an operating system to implement a relational database in a computer's storage system, manages users, allows for network access and facilitates testing database integrity and creation of backups.
MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.
MySQL has stand-alone clients that allow users to interact directly with a MySQL database using SQL, but more often, MySQL is used with other programs to implement applications that need relational database capability. MySQL is a component of the LAMP web application software stack (and others), which is an acronym for Linux, Apache, MySQL, Perl/PHP/Python. MySQL is used by many database-driven web applications, including Drupal, Joomla, phpBB, and WordPress. MySQL is also used by many popular websites, including Facebook, Flickr, MediaWiki, Twitter, and YouTube. [Wikipedia](https://en.wikipedia.org/wiki/MySQL)

## installation

### 1- UBUNTU
1. installing mysql
```sh
sudo apt update
sudo apt upgrade
sudo apt install mysql-server
```







### 2- Windows
download [this](https://sourceforge.net/projects/appserv/files/AppServ%20Open%20Project/9.3.0/appserv-x64-9.3.0.exe/download) application, apache, mysql, phpmyadmin.
> check all checkboxes in installiation:
- apache2
- mysql
- phpmyadmin
- php hypertext pre-processor



### 3- MAC
```sh
    brew install mysql
```




### Set root user password
```sh
sudo mysql
use mysql;
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456789';
FLUSH PRIVILEGES;
```

### Test
```sh
mysql -u root -p
# OR
mysqlsh -u root -p

# If success,
mysql>
```
## GUI Admin panel (phpmyadmin)

### 1. Ubuntu
```sh
sudo apt install phpmyadmin
## Select apache2
## select password (recommended same root password for mysql)
```
in Terminal:
```sh
 sudo nano /etc/apache2/apache2.conf
 ## last line add the follwoing
 Include /etc/phpmyadmin/apache.conf
 # CTR+X
 # y Enter
 sudo systemctl restart apache2.service
 # visit: http://localhost/phpmyadmin
```

## MySQL Workbench

MySQL Workbench is a visual database design tool that integrates SQL development, administration, database design, creation and maintenance into a single integrated development environment for the MySQL database system. It is the successor to DBDesigner 4 from fabFORCE.net, and replaces the previous package of software, MySQL GUI Tools Bundle. [Wikipedia](https://en.wikipedia.org/wiki/MySQL_Workbench)

> To download it, visit the official website for [Workbench](https://dev.mysql.com/downloads/workbench/), selecct your operating system, and download after login to Oracel, then install it.
