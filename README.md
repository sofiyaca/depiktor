# depiktor

Web application integrated with Twitter API to display current trends in technology.

## Tech Stack

React
Sequelize
PostgreSQL
NodeJS
Express
ChartJS
Jest
React Testing Library

## Installation

1. Clone the repository.
2. Run `npm install` in both the server and client folders.
3. Run nodemon in the client folder.
4. Create a .env file in your client with `SKIP_PREFLIGHT_CHECK=true`.
5. Run `npm start` in your client folder.

## Loading and configuring the module

For this project, we use a PostgreSQL database along with some Twitter API keys. Set up and run your PostgreSQL data.

Create a .env file in the server folder with the following variables:

    TWITTER_CONSUMER_KEY=Your_Twitter_Key_Here
    TWITTER_CONSUMER_SECRET=Your_Twitter_Secret_Here
    DB_SERVER=Your_PostgreSQL_Server_Name_Here
    DB_USER=Your_PostgreSQL_Server_User_Here
    DB_PASSWORD=Your_PostgreSQL_Server_Password_Here

## How to get Twitter Data

First, run create_technologies.js file under the folder migrations.

Then, in background_worker.js, set the `rule.minute` to an appropriate time (at least 1 minute after your curernt time) and run background_worker.js. Wait for the program to run at the set time and the database will be populated with data. Each run of background_worker.js populates the database with a single point for the set time.

The goal is to have the database populated with data over several days.
