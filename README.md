### Lotus Retreats MVP

### Introduction

Lotus Retreats MVP is a web application that allows users to search for hotels that offer yoga classes onsite and/or have a spa in different cities. This README provides instructions on how to set up and run the project.

### Dependencies

To get started, make sure you have the following dependencies installed:

Node.js (for both server and client)
MySQL (for the database)

### Installation

1. Clone this repository to your local machine.

2. In the project folder, install server dependencies by running:

`npm install`

3. Navigate to the client folder
   cd client

4. Install client dependencies
   npm install

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`

- Create a new database called retreats: `CREATE DATABASE retreats`

- Refer to the a `.env` file in the project folder of this repository containing the MySQL authentication information for MySQL user.

  -Run the database migration in the project folder of this repository, in a new terminal window. to create the 'hotels' table:
  npm run migrate

- This will create a table called 'hotels' in your database.

- Make sure you understand how the `hotels` table is constructed. In your MySQL console, you can run `use retreats;` and then `describe hotels;` to see the structure of the hotels table.

### Development

1. Start the Express server in the project directory:

- Run `npm start`the server on port 4000

- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.

### Screenshots

Go to images in the project directory to see a screenshot of the database (Db-hotels.png)

###

### Contributing

Feel free to contribute to this project by opening issues or submitting pull requests.
