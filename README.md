# depiktor

## Installation

1. Clone the repository.
2. Run `npm install` in both the server and client folders.
3. Run nodemon in the client folder.
4. Create a .env file in your client with `SKIP_PREFLIGHT_CHECK=true`.
5. Run `npm start` in your client folder.

## Loading and configuring the module

For this project, we use a PostgreSQL database along with some Twitter API keys. Set up and run your PostgreSQL database.

Create a .env file in the server folder with the following variables:

    TWITTER_CONSUMER_KEY=Your_Twitter_Key_Here
    TWITTER_CONSUMER_SECRET=Your_Twitter_Secret_Here
    DB_SERVER=Your_PostgreSQL_Server_Name_Here
    DB_USER=Your_PostgreSQL_Server_User_Here
    DB_PASSWORD=Your_PostgreSQL_Server_Password_Here
