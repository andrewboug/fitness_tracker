const client = require("../client");

async function createUser({ username, password }) {
  const {
    rows: [user],
  } = await client.query(
    `
INSERT INTO users(username, password)
VALUES ($1, $2)
ON CONFLICT (username) DO NOTHING
RETURNING *;
`,
    [username, password]
  );
  return user;
}

function getUser() {}

function getUserById() {}

async function getUserByUsername(username) {
  const {
    rows: [user],
  } = await client.query(
    `
      SELECT * FROM users
      WHERE username = $1
      `,
    [username]
  );
  return user;
}

module.exports = { createUser, getUserByUsername };
