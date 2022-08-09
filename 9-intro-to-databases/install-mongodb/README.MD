# Install Mongodb

## 1. Linux:
Take a look first at the official websit of [mongo instilliation page](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu) for updates.
    To install mongodb on Ubuntu, follow this steps:
### 1. Import the public key used by the package management system.
```sh 
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
```
### 2. Create a list file for MongoDB.
```ssh
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
```
### 3. Reload local package database.
```sh
sudo apt-get update 
```
### 4. Install the MongoDB packages.
```sh 
sudo apt-get install -y mongodb-org 
```
### 5. To upgrade the packages when a newer version becomes available.
```sh
echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-database hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-mongosh hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections
```
### 6. Delete 27017 port usage port from tmp folder
```sh
sudo rm -rf /tmp/mongodb-27017.sock 
``` 
### 7. Reload services.
```sh 
sudo systemctl daemon-reload 
```
### 8. Start mongod Service.
```sh 
sudo systemctl start mongod 
```

> After this steps in Terminal, try to type ```mongo``` in Terminal, Mongo shell should appear and ready to execute mongo commands

>You may use in terminal mongo shell, by typing in terminal: ``` mongosh ```

> Mongo shell allows to access to mongo server in terminal, like we call CLI mode

# Mongo Compass
> [Mongo Compass](https://www.mongodb.com/products/compass): is a GUI programm to controll mongodb databases, there is so many tools allow full controll to mongodb databases, can connect to a local mongodb databases, or to an external mongodb like [Atlas](https://account.mongodb.com/account/login?nds=true).

Mongo Compass can be installed in Windows/Linux/Mac.

>To install it, just visit the official website for [mongo compass](https://www.mongodb.com/products/compass), and download the match version of your operating system, and install it normally.

>To install it in Linux manually, Download the installiation file from the official website, then in Terminal:

```sh 
cd Downloads 
sudo apt install <The name of the installiation file> 
```

> Then you can see it in application menu, or you can run it in terminal by typing ``` mongodb-compass ```

