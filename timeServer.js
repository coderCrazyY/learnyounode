var net = require('net')

function pad(n) { return n < 10 ? '0' + n : n }

var server = net.createServer(function(socket) {
  d = new Date();
  s = d.getFullYear() + "-"
    + pad(d.getMonth() + 1) + "-"
    + pad(d.getDate()) + " "
    + pad(d.getHours()) + ":"
    + pad(d.getMinutes()) + "\n";
  socket.end(s);
});
server.listen(process.argv[2])



     // var net = require('net')

     // function zeroFill(i) {
     //   return (i < 10 ? '0' : '') + i
     // }

     // function now () {
     //   var d = new Date()
     //   return d.getFullYear() + '-'
     //     + zeroFill(d.getMonth() + 1) + '-'
     //     + zeroFill(d.getDate()) + ' '
     //     + zeroFill(d.getHours()) + ':'
     //     + zeroFill(d.getMinutes())
     // }

     // var server = net.createServer(function (socket) {
     //   socket.end(now() + '\n')
     // })

     // server.listen(Number(process.argv[2]))
