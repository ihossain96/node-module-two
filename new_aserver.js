const express = require('express');
const app = express();
const axios = require('axios');

const user = {
  name: 'hira hasna',
  age: 34,
  city: 'nyc',
};
// sync asyc
app.get('/home', function (req, res) {
  res.send('Hello World');
});

app.get('/user', function (req, res) {
  const url = 'http://127.0.0.1:3000/student';
  axios
    .get(url)
    .then(response => {
      console.log('Response Data:', response.data);
    })
    .catch(error => {
      console.error('Error fetching data:', error.message);
    });
  res.send('ok');
});

app.listen(4000);
