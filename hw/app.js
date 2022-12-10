const { json } = require('express/lib/response');
const { error } = require('node:console');
const path = require('node:path');
const fs = require('node:fs');
const { rename } = require('node:fs');

console.log(__filename);
console.log(__dirname);

// let PathToDirBoys = path.join(__dirname, './boys')  
// let PathToDirGerls = path.join(__dirname, './girls')  


fs.readdir(__dirname, (error,data)=>{
  data.map((directory)=>{
    let pathtodir = path.join(__dirname,directory)
      fs.readdir(pathtodir, (error,data)=>{
       if(data){
        data.map((items)=>{
        fs.readFile(path.join(pathtodir,items),(e,data)=>{
            let json = JSON.parse(data)
            if (json.gender === "male") {
              fs.rename(path.join(pathtodir,items),path.join(__dirname,'./boys',items),(e)=>{})
            } else {
              fs.rename(path.join(pathtodir,items),path.join(__dirname,'./girls',items),(e)=>{})
            }
          })
        })
       }
    })
  })
})