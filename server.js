const express = require('express');
const path = require('path');
const app = express();

// ชี้ไปที่โฟลเดอร์ 'work' ใน Desktop ของคุณ
app.use(express.static(path.join('C:/Users/Atipat Tharakij/Desktop/work')));

// เสิร์ฟไฟล์ HTML
app.get('/', function(req, res){
    res.sendFile(path.join('C:/Users/Atipat Tharakij/Desktop/work/index.html'));
});

app.get('/Home', function(req, res){
    res.sendFile(path.join('C:/Users/Atipat Tharakij/Desktop/work/Home.html'));
});

app.get('/Experience', function(req, res){
    res.sendFile(path.join('C:/Users/Atipat Tharakij/Desktop/work/Experience.html'));
});

app.get('/Project', function(req, res){
    res.sendFile(path.join('C:/Users/Atipat Tharakij/Desktop/work/Project.html'));
});

app.get('/Contact', function(req, res){
    res.sendFile(path.join('C:/Users/Atipat Tharakij/Desktop/work/Contact.html'));
});

// เริ่มเซิร์ฟเวอร์
app.listen(3000, function(){
    console.log('Server listening on http://localhost:3000');
});
