module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'ruler2'),
        username: env('DATABASE_USERNAME', 'wlanuser'),
        password: env('DATABASE_PASSWORD', 'wlan2030'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
