const express = require('express');
const app = express();

app.get('/home', function (req, res) {
  res.send('Hello World');
});

app.get('/user', function (req, res) {});

app.get('/student/:id', function (req, res) {
  console.log(req.query.id);
  console.log(req.params.id);
  res.send({
    name: 'Iqbal',
    age: 29,
    address: 'Coxbazar',
  });
});
app.listen(3000);
