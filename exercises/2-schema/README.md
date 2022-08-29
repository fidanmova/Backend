# Users Schema
> This is the schema for the users table.


## Task:
> In this task, you will create a `CLI` application that will store and manage the users collection in test database.
### 1. Create a new file called `Users.js`

### 2. Using mongoose library, create a new connection with mongodb server (Atlas/local) connected to `test` database.

### 3. Create a new schema `UsersSchema` for the users table in `test` database.
- This schema should have the following fields:
    1. `name`: String: 
        - required with error message: `"Name is required"`
        - minimum length of 3 characters with error message: `"Name must be at least 3 characters long"`
    2. `email`: String: 
        - required with error message: `"Email is required"` 
        - unique with error message: `"This email is already exist!"`
        - should be a valid email expression with error message: `"This email is not valid!"`, 
    3. `password`: String: 
        - required with error message: `"Password is required"`
        - minimum length of 6 characters with error message: `"Password must be at least 6 characters long"`
    4. `age`: Number: 
        - required with error message: `"Age is required"`
        - minimum value of 18 with error message: `"Age must be at least 18 years old"`
        - maximum value of 65 with error message: `"Age must be at most 65 years old"`
    5. `gender`: String:
        - NOT required
        - default: `null`
        - should be `male` or `female` or `other` with error message: `"gender can be null, female, male, or other "`
    6. `phone`: String:
        - NOT required.
        - default: `null`
        - minimum length of 10 characters with error message: `"phone must be at least 10 characters long"`
    7. `address`: Object:
        - NOT required.
        - default: `null`
        - country: String:
            - required.
            - minimum length of 3 characters with error message: `"country must be at least 3 characters long"`
        - city: String:
            - required.
            - minimum length of 3 characters with error message: `"city must be at least 3 characters long"`
        - street: String:
            - required.
            - minimum length of 3 characters with error message: `"street must be at least 3 characters long"`
    8. hobbies: Array:
        - NOT required.
        - default: `[]`
        - each element should be a string with error message: `"hobbies must be an array of strings"`

### 4. Create a new model for the users table.

### 5. in `app.js` file, use this model to make testing:

- Insert a new user into the database.
- Find all users in the database.
- Find a user by name.
- Find a user by email.
- update a user by id.
- delete a user by id.

> use `Mongodb-compass` application or in shell: `mongosh` to see the changes in test database.

### 6. Bonus:
> Create a `GUI` (`express-js, ejs or any view engine, routes`) application that will sotre and manage the users collection in test database.

Hint: search in google for `express-generator` the easy fast way to generate a quick and simple express application.