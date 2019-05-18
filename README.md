# movies-database
SPA application built with ReactJS on top of NodeJS RESTful API with implemented HATEOAS and Server Side Caching, built with Express and MySQL database.

Online: [movies-database.jskoneczny.pl](http://movies-database.jskoneczny.pl/)

API: [jskoneczny.pl:3004](http://jskoneczny.pl:3004/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need:

```
NodeJS and NPM package manager

Access to MySQL database as super user

```

### Installing

A step by step series of examples that tell you how to get a development env running

Install all dependencies from server and client

```
cd ./server
npm i

cd ./client
npm i
```

Create .env file with database connection info nad JWT secret in server directory
```
# Database
DB_HOST=
DB_USER=
DB_DATABASE=
DB_PASS=

# JWT secret
JWT_SECRET=
```

Import database structure from DB.sql

```
mysql db_name < DB.sql
```

Run both, server and client application and open the browser.

```
cd ./server
npm start
cd ./client 
npm run dev

http://localhost:3000
```

## More on API
I wanted to build an API that reaches the final level of The Richardson Maturity Model. This API serves movie data along with the ability to register and login users.
HATEOAS was implemented without any packages. One can communicate with API in order to get movies data. By sending an auth header, API returns links for other actions,
only accessable for authenticated user. Authenticated users have ability to CREATE, UPDATE, and DELETE movies.

JWT token send in header: 
```
Authorization: Bearer 'token'
```
Server side caching was implemented in this API by using a node-cache package.

### Communicating with API

Getting all the movies,
Auth header: non-required

```
GET http://localhost:3001/api/movies
```

Getting one movie,
Auth header: non-required

```
GET http://localhost:3001/api/movies/:id
```

Updating one movie,
Auth header: required

```
UPDATE http://localhost:3001/api/movies/:id
```

Deleting one movie,
Auth header: required

```
DELETE http://localhost:3001/api/movies/:id
```

Creating a movie,
Auth header: required

```
POST http://localhost:3001/api/movies
BODY:
{
	"title": "",
	"description": "",
	"genre": "",
	"year": "",
	"director": "",
	"language": "",
	"length": "",
	"rate": ""
}
```

Register user

```
POST http://localhost:3001/api/register
BODY:
{
	"email": "",
	"password": "",
	"lastName": "",
	"firstName": ""
}

```

Login user

```
POST http://localhost:3001/api/login
BODY:
{
	"email": "",
	"password": ""
}

```

## Running the tests

Test are in progress. Currently, only test for server and getting movies info are done.

Running tests:

```
npm run test
```

## TODO
* (API) User cannot delete or update movie, which he did not create

## Built With

* ExpressJS - The web framework used
* MySQL - Database used
* mysql, express-validator, jsonwebtoken, node-cache - Packages worth mentioning
* Mocha, supertest - For testing
* ReactJS
* Next.js



## Authors

* **Jakub Skoneczny** - *Initial work* - [Portfolio](https://jskoneczny.pl)


## License

This project is licensed under the MIT License.
