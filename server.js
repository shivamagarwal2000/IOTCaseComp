const express = require('express');
const app = express();
const nicole;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(7000, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

