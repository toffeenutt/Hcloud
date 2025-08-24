const express = require('express');

const filesController = require('../controllers/files');

const router = express.Router();

router.get(/.*/, filesController.getFiles);

module.exports = router;