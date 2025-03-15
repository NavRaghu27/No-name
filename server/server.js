const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS for cross-origin requests

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
