const path = require('path');
const fs = require('fs').promises;

class FileManager {
  constructor(file_path) {
    this.file_path = path.join('/storage', decodeURIComponent(file_path));
    //this.isDir
  }

  async fileList() {
    let items = {
      directories: [],
      files: []
    };
  
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
    
    return items;
  }
}

module.exports = FileManager;