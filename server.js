const express = require('express');
const AccountsRouter = require('./accounts/accounts-router')

const server = express();
const db = require('./data/dbConfig.js');

server.use(express.json());
server.use('/api/accounts',  AccountsRouter)

server.get('/', (req, res) => {
  res.send('<h3>Home page</h3>');
});

module.exports = server;