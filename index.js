// const hello="hello world";
// console.log(hello);

// const fs= require('fs');
// const textOut=`Tihs is what we know about node.js : created on ${Date.now()}`
// fs.writeFileSync("./output.txt",textOut);
// console.log("File written");

// const fs=require('fs');
// fs.readFile('./start.txt','utf-8',(err,data1)=>{
//     console.log(data1);
//     fs.readFile('./output.txt','utf-8',(err,data2)=>{
//         console.log(data2);
//         fs.writeFile('./final.txt','Test final',err=>{
//             console.log("Ended");
//         });
//     });
// });

// console.log("already read");
const fs=require('fs');
const { fstat } = require('fs');
const http=require('http');
const { json } = require('stream/consumers');
const server=http.createServer((req,res)=>{
    const pathname=req.url;
    if (pathname==='/'|| pathname==='overview'){
        res.end("OVERVIEW")
    }    
    else if (pathname==='/'|| pathname==='product'){
        res.end("PRODUCT")
    }
    else if (pathname==='/api'|| pathname==='product'){
        fs.readFile(`${__dirname}/data.json`,'utf-8',(err,data)=>{
            const productData=JSON.parse(data);
            console.log(productData);
            res.writeHead(200,{'Content-type': 'application/json'})
            res.end(data);
        });
    }
    else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-heade':'Hello world' //hhl
        });
        res.end('<h1 style="color : red;">Page not found <h1> ')
    }
});
server.listen(27001,'127.0.0.1',()=>{
    console.log("Listening . . .");
});