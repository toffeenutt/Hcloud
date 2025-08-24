function respondError (err, req, res, next) {
  if (err.status) {
    res.status(err.status).json({ error: err.status });
  }
  else {
    res.status(500).json({ error: 'Unhandled error' });
  }
}

module.exports = respondError;