const path = require('path');
const fs = require('fs').promises;

class FileManager {
  constructor(file_path) {
    this.file_path = path.join(process.env.STORAGE_ROOT, decodeURIComponent(file_path));
    //this.isDir
  }

  async fileList() {
    let items = {
      directories: [],
      files: []
    };
  
    try {
      const file_names = await fs.readdir(this.file_path);
      for (const file_name of file_names) {
        const stat = await fs.stat(path.join(this.file_path, file_name));
        if (stat.isDirectory()) {
          items.directories.push({
            name: file_name
          });
        } else {
          items.files.push({
            name: file_name,
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
      throw(err);
    }

    return items;
  }

  saveFiles(files) {
    files
  }
}

module.exports = FileManager;