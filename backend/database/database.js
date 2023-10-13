
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres', 
  connection: {
        host: env('DATABASE_HOST', 'private-db-postgresql-nyc3-48326-do-user-14552568-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25060),
        database: env('DATABASE_NAME', 'defaultdb'),
        user: env('DATABASE_USERNAME', 'doadmin'),
        password: env('DATABASE_PASSWORD', 'AVNS_xwwcig2gmMpEx5KaiPm'),
        ssl: env.bool("DATABASE_SSL", true) && {
          rejectUnauthorized:env.bool('DATABASE_SSL_SELF', false),
      },
      },
      debug: false,
  },
});