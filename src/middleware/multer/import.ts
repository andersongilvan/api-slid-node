import multer from "multer";


const upload = multer({ dest: "./temp" })


const uploadFile = upload.single("file")

export { uploadFile }