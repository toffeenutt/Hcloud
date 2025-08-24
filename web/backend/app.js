const express = require('express');
const path = require('path');

const app = express();

/* if (process.env.NODE_ENV === 'development') {
  app.use(require('./middlewares/cors'));
} */

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', require('./routes/api'));

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.use(require('./middlewares/error'));

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
