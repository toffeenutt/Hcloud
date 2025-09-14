const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    /* todo: check path is valid */
    const file_path = path.join(process.env.STORAGE_ROOT, decodeURIComponent(req.path));
    cb(null, file_path);
  },
  filename: function (req, file, cb) {
    /* todo: check redunduncy and filename is valid */
    const file_name = Buffer.from(file.originalname, 'latin1').toString('utf8');
    cb(null, decodeURIComponent(file_name));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;