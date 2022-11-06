
const express = require('express');    
const path = require('path');      
const app = express();       
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));              
 
app.use('/', function (req, res, next) {  
 
    var options = {       
        root: path.join(__dirname)    
    }; 
    var fileName = 'index.html';     
    res.sendFile(fileName, options, function (err) {  
        if (err) {       
            next(err); 
        } else { 
            console.log('Sent:', fileName);    
        } 
    }); 
}); 
 
app.listen(PORT, function (err) {    
    if (err) console.log(err);     
    console.log("Server listening on PORT", PORT);  
}); 
 
app.get('/', function (req, res) {    
    console.log("File Sent")      
    res.send(); 
}); 
 
// *ก่อน run server ต้อง ไปที่ terminal พิม npm install express ก่อน 
// พอ install เส็จแล้วก็ พิม node ตามด้วยชื่อไฟล์ (เช่น node app.js) 
// เข้า http://localhost:3000/ ก็จะเจอเว็บเรา 
 
// https://www.freecodecamp.org/news/how-to-deploy-an-applicati...