const fs = require('fs');
const dir = './public/';
const utils = {};


utils.getFileDetails = async (req, res) => {
    const uploadedFiles = await fs.promises.readdir(dir);
    return uploadedFiles;
}


module.exports = utils;