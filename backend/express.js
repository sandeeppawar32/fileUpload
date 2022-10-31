const express = require('express');
const multer = require('multer');
const cors = require('cors');
const controller = require('./controllers/uploadFile');

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '_' + 1 + '.png')
    }
})
app.use(cors());

const upload = multer({ storage }).single('file');
app.use(express.json({ limit: '0.5mb' }));
app.use(express.urlencoded({ limit: '0.5mb', extended: true }));

app.get('/getAllFiles/:id', (req, res, next) => {
    controller.getFileDetails(req, res);
});

app.get('/getAllFileDetails', (req, res, next) => {
    controller.getAllFileDetails(req, res);
});

app.post('/upload', (req, res, next) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
            return res.status(500).json(err);
        }
        controller.getAllFileDetails(req, res)
    });
});

module.exports = app;