const express = require('express');

const filesController = require('../controllers/files-controller');
const multerMiddleware = require('../middlewares/multer');

const router = express.Router();

router.get(/.*/, filesController.getFiles);
router.post(/.*/, multerMiddleware.array('files'), filesController.postFiles);

module.exports = router;