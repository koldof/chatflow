const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'deekshaachar',
  host: 'localhost',
  port: 5432,
  database: 'chatflow_db'
});

pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
});

module.exports = pool;