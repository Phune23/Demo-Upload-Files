const express = require('express'); //Nhập (import) module Express và gán nó cho hằng số express.
const app = express(); //Tải thư viện Express, là một framework ứng dụng web cho Node.js.

const multer =  require('multer'); //sử dụng multer để xử lý file tải lên với Express.js
const upload = multer({ dest: 'upload/'}); // Cấu hình multer để lưu file tải lên trong thư mục 'upload/'

app.get('/', (req,res) => {
    /* 
        đoạn mã này tạo ra một route trong ứng dụng Express để phản hồi với chuỗi 'Hello Phune23' 
        khi có yêu cầu HTTP GET đến URL gốc (/). Khi bạn truy cập http://localhost:3000/ trong trình duyệt web, 
        bạn sẽ thấy thông điệp "Hello Phune23".
    */
    res.send('Hello Phune23');
});

app.get('/api/upload', upload.single('file'), (req, res) => {
    // upload.single('file') để xử lý việc tải lên một file duy nhất, có tên của trường (field name) trong form mà file sẽ được tải lên.
    //Khi có yêu cầu đến đường dẫn này, máy chủ sẽ phản hồi với thông điệp 'Uploand successfully'.
    res.json(req.file); //đoạn mã này lấy thông tin về file đã được tải lên.
    res.send('Upload successfully');
});

const port = process.env.PORT || 3000;
/*  dòng mã này đảm bảo rằng ứng dụng sẽ lắng nghe trên cổng được chỉ định bởi biến môi trường PORT nếu nó tồn tại,
    hoặc trên cổng 3000 nếu biến môi trường này không được thiết lập.  
*/

app.listen(port, () => {
    //khởi động máy chủ Express.js và làm cho nó lắng nghe các yêu cầu HTTP trên một cổng cụ thể.
    console.log(`listening on port ${port}`);
});