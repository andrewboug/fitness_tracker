const client = require("./client");
const { createUser } = require("./adapters/users");

const {
  users,
  activities,
  routines,
  routine_activities,
} = require("./seedData");

async function dropTables() {
  // Drop all tables in order
  try {
    console.log("Starting to drop tables...");
    await client.query(`
    DROP TABLE IF EXISTS routine_activities;
    DROP TABLE IF EXISTS activities;
    DROP TABLE IF EXISTS routines;
    DROP TABLE IF EXISTS users;
    `);

    console.log("Finished dropping tables!");
  } catch (error) {
    console.error("Error dropping tables!");
    throw error;
  }
}

async function createTables() {
  // Define your tables and fields
  try {
    console.log("Starting to build tables...");

    await client.query(`
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username varchar(255) UNIQUE NOT NULL,
      password varchar(255) NOT NULL
      );

      CREATE TABLE routines(
        id SERIAL PRIMARY KEY,
        creator_id INTEGER REFERENCES users(id),
        is_public BOOLEAN DEFAULT false,
        name varchar(255) UNIQUE NOT NULL,
        goal TEXT NOT NULL
      );

      CREATE TABLE activities(
        id SERIAL PRIMARY KEY,
        name varchar(255) UNIQUE NOT NULL,
        description TEXT NOT NULL

      );

      CREATE TABLE routine_activities(
        id SERIAL PRIMARY KEY,
        routine_Id INTEGER REFERENCES routines(Id),
        activity_Id INTEGER REFERENCES activities(Id),
        duration INTEGER,
        count INTEGER,
        UNIQUE (routine_Id, activity_Id)
      )
    
      `);
  } catch (error) {
    console.error("Error building tables!");
    throw error;
  }
}

async function populateTables() {
  console.log("Populating tables...");
  try {
    for (const user of users) {
      const createdUser = await createUser(user);
      console.log("User: ", createdUser);
    }
  } catch (error) {
    console.log(error);
  }
}

async function rebuildDb() {
  client.connect();
  try {
    await dropTables();
    await createTables();
    await populateTables();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
}

rebuildDb();
