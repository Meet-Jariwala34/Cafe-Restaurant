import multer from "multer";
const storage = multer.diskStorage({
    filename: function(req, file, callback) {
        callback(null, Date.now() + file.originalname); // Use null for error, not 'none'
    }
});

const upload = multer({storage})

export default upload;