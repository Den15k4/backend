const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/api/mine', (req, res) => {
  // Здесь будет логика майнинга
  const minedAmount = Math.floor(Math.random() * 10) + 1;
  res.json({ mined: minedAmount });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});