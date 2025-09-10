const multer = require('multer');

const upload = multer({ dest: '/storage' });

module.exports = upload;