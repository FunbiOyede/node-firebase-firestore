# node-firebase-firestore

A CRUD RESTFUL API USING FIREBASE FIRESTORE

### 1. Clone the repo

Clone the repo locally. In a terminal, run:

```
$ git clone https://github.com/FunbiOyede/node-firebase-firestore.git
```

### 2. Run the application

#### Node.js Installation

1. Install [Node.js](https://nodejs.org/en/)
2. Run the following commands in a terminal:

```
$ npm install


$ yarn install

```

#### Firebase Installation

1. install [firebase cli](https://firebase.google.com/docs/cli)
2. Then run the following commands

```
$ npm install -g firebase-tools


$ yarn global add firebase-tools

```

### 3. Expected Parameters

The API expect the following Parameters: </br>
`id` of type int </br>
`email` of type string </br>
`phone` of type string </br>
`last_name` of type string </br>
`first_name` of type string </br>

### 4. Using Postman

Make sure post is set to either `x-www-form-urlencoded` or `raw json format`

### 5. Endpoints

- create user (POST): `/api/create`
- delete user (DELETE): `/api/delete/:id`
- get a user (GET): `/api/user/:id`
- update a user (PUT): `/api/user/update/:id`
- get all users (GET): `/api/user`

# Links

[Building api with firebase](https://medium.com/better-programming/building-an-api-with-firebase-109041721f77)
