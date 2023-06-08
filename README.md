# my_retreats_mvp

###Introduction

A web app that allows the user to search for hotels that provide yoga classes onsite and/or a spa in different cities. 

### Dependencies

Run `npm install` in the project folder to install dependencies related to Express (the server).

`cd client` and run `npm install` install dependencies related to React (the client).

### Database Prep

- Access the MySQL interface in your terminal by running `mysql -u root -p`
- Refer to the a `.env` file in the project folder of this repository containing the MySQL authentication information for MySQL user. 
- The database is called 'hotels'.

- Run `npm run migrate` in the project folder of this repository, in a new terminal window. This will create a table called 'hotels' in your database.

- Make sure you understand how the `hotels` table is constructed. In your MySQL console, you can run `use retreats;` and then `describe hotels;` to see the structure of the students table.

### Development

- Run `npm start` in project directory to start the Express server on port 4000
- In another terminal, do `cd client` and run `npm run dev` to start the client in development mode with hot reloading in port 5173.