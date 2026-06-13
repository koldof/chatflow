const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware (security rules)
app.use(cors());
app.use(express.json());

// Your first route (like a welcome sign)
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from ChatFlow Backend! 🚀' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});