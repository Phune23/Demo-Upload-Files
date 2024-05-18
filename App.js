const express = require('express'); //Nhập (import) module Express và gán nó cho hằng số express.
const app = express(); //Tải thư viện Express, là một framework ứng dụng web cho Node.js.

app.get('/', (req,res) => {
    /* 
        đoạn mã này tạo ra một route trong ứng dụng Express để phản hồi với chuỗi 'Hello Phune23' 
        khi có yêu cầu HTTP GET đến URL gốc (/). Khi bạn truy cập http://localhost:3000/ trong trình duyệt web, 
        bạn sẽ thấy thông điệp "Hello Phune23".
    */
    res.send('Hello Phune23');
});

app.get('/api/upload', (req, res) => {
    res.send('Uploand successfully');
});

const port = process.env.PORT || 3000;
/*  dòng mã này đảm bảo rằng ứng dụng sẽ lắng nghe trên cổng được chỉ định bởi biến môi trường PORT nếu nó tồn tại,
    hoặc trên cổng 3000 nếu biến môi trường này không được thiết lập.  
*/

app.listen(port, () => {
    //khởi động máy chủ Express.js và làm cho nó lắng nghe các yêu cầu HTTP trên một cổng cụ thể.
    console.log(`listening on port ${port}`);
});