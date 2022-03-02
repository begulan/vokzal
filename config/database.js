module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'db-mysql-nyc3-30286-do-user-9882969-0.b.db.ondigitalocean.com'),
      port: env.int('DATABASE_PORT', 25060),
      database: env('DATABASE_NAME', 'defaultdb'),
      user: env('DATABASE_USERNAME', 'doadmin'),
      password: env('DATABASE_PASSWORD', '1JQNY8SRtNyDWGIZ'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
