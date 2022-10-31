const utils = require('../utils/utils');
const uploadFile = {};

uploadFile.getFileDetails = async(req, res) => {
    const file = `./public/${req.params.id}`;
    res.download(file);
};

uploadFile.getAllFileDetails = async (req, res) => {
    const files = await utils.getFileDetails(req, res);
    res.status(200).send(files);
}

module.exports = uploadFile;