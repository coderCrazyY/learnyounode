var fs = require('fs');
var path = require('path');
// var file = process.argv[2];
// var extName = process.argv[3];

// fs.readdir(file,function callback(err,list){
//     list.forEach(function(fileName){
//         if(path.extname(fileName) ==='.'+extName){
//             console.log(fileName);
//         }
//     });
// });

module.exports = function(fileDir, extname, callback){
    var extension = '.'+extname;
    fs.readdir(fileDir, function(err, list){
        if(err) {
            callback(err,null)
        }
        else{
            res = []
            list.forEach(function(fileName){
                if(path.extname(fileName) == extension){
                    res.push(fileName)
                }
            })
            callback(null, res)
        }
    })
}

// right answer
 // var fs = require('fs')
 // var path = require('path')

 // module.exports = function (dir, filterStr, callback) {

 //   fs.readdir(dir, function (err, list) {
 //     if (err)
 //       return callback(err)

 //     list = list.filter(function (file) {
 //       return path.extname(file) === '.' + filterStr
 //     })

 //     callback(null, list)
 //   })
 // }
