const path = require("path");

module.exports = ({ env }) => {
  // Define SQLite as the database client
  const client = "sqlite";

  // SQLite connection configuration
  const connection = {
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
    },
    useNullAsDefault: true,
    pool: {
      min: env.int("DATABASE_POOL_MIN", 2),
      max: env.int("DATABASE_POOL_MAX", 10),
    },
    acquireConnectionTimeout: env.int("DATABASE_CONNECTION_TIMEOUT", 60000),
  };

  return {
    connection: {
      client,
      ...connection,
    },
  };
};
