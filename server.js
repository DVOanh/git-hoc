import express from 'express';//Import thư viện Express để tạo server
import cors from 'cors';//Import thư viện CORS để xử lý các yêu cầu từ các nguồn khác nhau

import productRoutes from './route/products.js';//Import các route sản phẩm
const app = express();//Tạo một ứng dụng Express mới

app.use(cors());//Cho phép các yêu cầu từ các nguồn khác nhau
app.use(express.json());//Phân tích cú pháp JSON trong các yêu cầu đến

app.use('/products', productRoutes);//Sử dụng các route sản phẩm

app.listen(3000, function(){
    console.log('Server được chạy ở cổng: 3000');
})