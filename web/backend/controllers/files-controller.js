const path = require('path');
const fs = require('fs').promises;

const FileManagerModel = require('../models/file-manager-model');

async function getFiles(req, res, next) {
  const file_manager = new FileManagerModel(req.path);

  let items;
  try {
    items = await file_manager.fileList();
  } catch (err) {
    next(err);
    return;
  }

  res.json(items);
}

async function postFiles(req, res, next) {
  const file_path = path.join('/storage', decodeURIComponent(req.path));
  console.log(file_path);
  console.log(req.body);
  /* todo */
}

module.exports = {
  getFiles,
  postFiles
}