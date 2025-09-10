const express = require('express');

const router = express.Router();

router.use('/files', require('./files-routes'));

module.exports = router;