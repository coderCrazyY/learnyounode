var myModule = require('./filteredLS.js')
var file = process.argv[2]
var ext = process.argv[3]
myModule(file,ext,function(err,list){
    for(var elm in list){
        console.log(list[elm])
    }
})
