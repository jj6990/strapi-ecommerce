const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'db-postgresql-nyc1-32378-do-user-14552568-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', 'AVNS_CnriwfIEYiDiTqW6eD5'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
      },
    },
    debug: false,
  },
});