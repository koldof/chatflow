const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test database connection
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json({ 
      message: 'Database connected!',
      users: result.rows 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Hello route (from Week 2)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from ChatFlow Backend! 🚀' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});