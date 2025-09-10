function respondError (err, req, res, next) {
  if (err.status) {
    res.status(err.status).json({ error: err.status });
  }
  else {
    console.log(err);
    res.status(500).json({ error: 'Unhandled error' });
  }
}

module.exports = respondError;