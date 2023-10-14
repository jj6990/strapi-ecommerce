
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', 
  connection: {
        host: env('DATABASE_HOST', 'app-88060f10-32b4-4728-96db-c5b929ca5623-do-user-14552568-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'db'),
        user: env('DATABASE_USERNAME', 'db'),
        password: env('DATABASE_PASSWORD', 'AVNS_SbAMqmE0v6oGUCxKig7'),
        ssl: env.bool("DATABASE_SSL", true) && {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
      },
      },
      debug: false,
  },
});