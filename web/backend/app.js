const path = require('path');

const express = require('express');

const app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.urlencoded({ extended: false }));

app.use('/api', require('./routes/api-routes'));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(require('./middlewares/error'));

app.listen(3000, () => {
  console.log('Server is running');
});
