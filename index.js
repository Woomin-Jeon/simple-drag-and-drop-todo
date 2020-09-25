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
  resave: false,
  saveUninitialized: false,
  cookie: {},
}));

app.get('/', (req, res) => res.render('index.html'));

const routePath = process.env.IS_DUMMY_ROUTE_ON ? './dummy-routes' : './routes';
app.use('/', require(routePath));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Server Error');
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}...`);
});
