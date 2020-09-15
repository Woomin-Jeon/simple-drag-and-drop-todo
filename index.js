const express = require('express');

const cors = require('cors');

const app = express();

const session = require('express-session');

require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: false,
  cookie: {},
}));

app.get('/', (req, res) => res.render('index.html'));
app.use('/', require('./routes'));

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
