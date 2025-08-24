const path = require('path');
const fs = require('fs').promises;

/* todo
files를 model로 분리 할 것
*/
async function getFiles (req, res, next) {
  const file_path = path.join('/storage', decodeURIComponent(req.path));
  //console.log(file_path);
  let files = {
    directories: [],
    files: []
  };

  try {
    const filenames = await fs.readdir(file_path);
    for (const filename of filenames) {
      const stat = await fs.stat(path.join(file_path, filename));
      if (stat.isDirectory()) {
        files.directories.push({
          name: filename
        });
      } else {
        files.files.push({
          name: filename,
          size: stat.size
        });
      }
    }
  } catch (err) {
    if (err.code === 'ENOENT') {
      err.status = 404;
    }
    else {
      err.status = 500;
      console.log(err);
    }
    next(err);
    return;
  }

  res.json(files);
}

module.exports = {
  getFiles
}