const express = require('express');

const cors = require('cors');

const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

app.get('/', (req, res, next) => {
  res.send('hello');
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
