const multer = require('multer')

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");	// 콜백 함수로 업로드 파일의 저장 위치를 설정한다.
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);	// 콜백 함수로 파일이 저장될 때 이름을 설정한다.
    },
    fileFilter: (req, file, cb) => {	// 파일 필터로 여기서는 파일의 확장자가 .png 혹은 .jpg 인 이미지 파일만 저장되도록 하였다.
        const ext = path.extname(file.originalname);
        if(ext !== '.png' || ext !== '.jpg'){
            return cb(res.status(400).end('only png, jpg are allowed'), false);
        } 
        cb(null, true);
    }
});

const upload = multer({ storage: storage }).single("file");

module.exports = upload