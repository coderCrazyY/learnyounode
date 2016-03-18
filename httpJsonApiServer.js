var http = require('http')
var url = require('url')

http.createServer(function(req, res){
    var parsedUrl = url.parse(req.url, true)
    var resource = routes[parsedUrl.pathname];
    if(resource){
        res.writeHead(200, {"Content-Type":"application/json"})
        res.end(JSON.stringify(resource(parsedUrl)))
    }
    else{
        res.writeHead(404)
        res.end()
    }
}).listen(process.argv[2])

var routes = {
    "/api/parsetime":function(parsedUrl){
        d = new Date(parsedUrl.query.iso)
        return {
            hour:d.getHours(),
            minute:d.getMinutes(),
            second:d.getSeconds()
        }
    },
    "/api/unixtime":function(parsedUrl){
        return {
            unixtime:(new Date(parsedUrl.query.iso)).getTime()
        }
    }
}





     // var http = require('http')
     // var url = require('url')

     // function parsetime (time) {
     //   return {
     //     hour: time.getHours(),
     //     minute: time.getMinutes(),
     //     second: time.getSeconds()
     //   }
     // }

     // function unixtime (time) {
     //   return { unixtime : time.getTime() }
     // }

     // var server = http.createServer(function (req, res) {
     //   var parsedUrl = url.parse(req.url, true)
     //   var time = new Date(parsedUrl.query.iso)
     //   var result

     //   if (/^\/api\/parsetime/.test(req.url))
     //     result = parsetime(time)
     //   else if (/^\/api\/unixtime/.test(req.url))
     //     result = unixtime(time)

     //   if (result) {
     //     res.writeHead(200, { 'Content-Type': 'application/json' })
     //     res.end(JSON.stringify(result))
     //   } else {
     //     res.writeHead(404)
     //     res.end()
     //   }
     // })
     // server.listen(Number(process.argv[2]))
