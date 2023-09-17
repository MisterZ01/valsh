export default {
  development: {
    port: 5432,
    username: process.env.PGUSER || 'postgres',
    password: process.env.PGPASSWORD || 'root',
    database: process.env.PGDATABASE || 'abcd',
    host: process.env.PGHOST || '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: process.env.DB_TEST_USER || 'postgres',
    password: process.env.DB_TEST_PASSWORD || 'root',
    database: process.env.DB_TEST_NAME || 'abcd',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    dialect: 'postgres',
  },
  production: {
    port: 7201,
    username: process.env.PGUSER || 'your_prod_user',
    password: process.env.PGPASSWORD || 'your_prod_password',
    database: process.env.PGDATABASE || 'production_db',
    host: process.env.PGHOST || 'your_prod_host',
    dialect: 'postgres',
  },
};
