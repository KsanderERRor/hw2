// вбудованні модулі  fs - fail sustem  2- path   3- util  
// TODO fs, path, util(promise)
// console.log(__filename);
// console.log(__dirname);
// const { error } = require('node:console');
// const { unwatchFile, read } = require('node:fs');
// const { request } = require('node:http'); 
////////////////////////////////////////////////

const fs = require('node:fs').promises;

const { error } = require('node:console');
const { dirname, join } = require('node:path');
// fs.readFile(  ('./app.js'),  (err , data  ) => {
//    if (err){
//       console.log('error');
//        return;
//    }
//       console.log(data);
// })

//////////////////////////////////////////////////
const path = require('node:path');

// const joindoc = path.join(__dirname, '///\\/\/\/\/', 'docForJoin.txt' );
// console.log(joindoc);

// fs.readFile(path.join(__dirname, 'docForJoin.txt'), (err , data  ) => {
//    if (err){
//       console.log('error');
//        return;
//    }
//       console.log(data.toString());
// })
// /////////////////////////////////////////////////////
const util = require('node:util'); 
// const readFilePromise = util.promisify(fs.readFile );

// readFilePromise(path.join(__dirname, 'docForJoin.txt')) 
//  .then(value => {
//    console.log(value);
//  })



// fs.appendFile('./newfileCreatre1.txt', 'this text in new file \n')
//  .catch(e => {
//    console.log(e);
//  });

// fs.writeFile('./newfileCreatre', 'this new text ')
// .catch(error => {
//    console.log('error');
// })
// const newfolderPath = path.join ( __dirname, 'newfolder') ; 
// fs.readdir(newfolderPath)
//  .then(filesOrDirectory => { 
//    console.log(filesOrDirectory);
   
//    for (const strings of filesOrDirectory) {
//       const pathToFile = path.join(newfolderPath, strings);
//       console.log(pathToFile);

//       fs.stat(pathToFile).then(value => {
//          console.log(value);
//       })
//    }

//  })
//  .catch (e => {
//    console.log(e);
//  })
/////////////2attempt 
// const pathNewFolder = path.join(__dirname,'./newfolder')
// fs.readdir (pathNewFolder)
//  .then ( fileORdirectory => {
//   // console.log(fileORdirectory);
//    for (const strings of fileORdirectory) {
//     //  console.log(strings);
//       const PathToFile = path.join(pathNewFolder, strings)
     
//        fs.stat(PathToFile).then (value => {
//         console.log(PathToFile);
//         console.log(value.isDirectory(), 'isDirectory()');
//         console.log(value.isFile(), 'isFile()')
//        }) 
//    }
//  })
//  .catch(error =>{
//   console.log(error);
//  })

 /////////////////3attempt for promise
const pathNewFolder = path.join(__dirname,'./newfolder')
//  fs.readdir (pathNewFolder)
//   .then ( fileORdirectory => {
//    const FsStatPromiseArray = []
//      for (const strings of fileORdirectory) {
//        const PathToFile = path.join(pathNewFolder, strings)
//          FsStatPromiseArray.push(fs.stat(PathToFile))
            
//      }
//           console.log(FsStatPromiseArray);
//           return Promise.allSettled(FsStatPromiseArray)
//   })
//  .then(fsStatInfo => {
//    console.log(fsStatInfo);
//  })

//  .catch(error =>{
//   console.log(error);
// })
////////////////////////////////3attempt for 2 light code
// const pathNewFolder = path.join(__dirname,'./newfolder')
//  fs.readdir (pathNewFolder)
//   .then ( fileORdirectory => {

//    const FsStatPromiseArray = []

//     fileORdirectory.map(string => FsStatPromiseArray.push(fs.stat(join(pathNewFolder,string))) )

//     // console.log(FsStatPromiseArray);
     
//     return Promise.allSettled(FsStatPromiseArray)
//   })
//  .then(fsStatInfo => {
//    for (const fsStatInfoElement of fsStatInfo ) {
//     if (fsStatInfoElement.status === 'fulfilled' ) { 
//       console.log(fsStatInfoElement.value);
//     }
//    }
//  })
//  .catch(error =>{
//   console.log(error);
// })

///////////////////////////////5attempt for super-senior young dev

// 
fs.readdir (pathNewFolder, {withFileTypes: true }).then (files => {
  files.forEach(file => {
    console.log(file);
    console.log(file.isFile());
  })
})
