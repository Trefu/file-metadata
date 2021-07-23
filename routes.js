const router = require('express').Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

router.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
    res.json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })

})
module.exports = router;