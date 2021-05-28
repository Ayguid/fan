var fakeData = require('./fakeData.js')
const http = require("http")
const socketIo = require("socket.io")
const port = process.env.PORT || 7070
const server = http.createServer(function (req, res){
  handleRequest(req, res) // para api reqs
}).listen(port, () => {
  console.log("server running in port", port)
})

const io = socketIo(server, {
  cors: {
    origin: "*", // por ahora esta que acepte de todos lados
    methods: ["GET", "POST"],
  }
})


io.sockets.on("connection", (socket) => {


  io.emit("mount", 'ready');
  
  // socket.on('message', (evento, nro) => {
  //   io.emit('output_changed', nro)
  // })

  setInterval(() => {
    io.emit("message", fakeData.fanTokens)
    var random_boolean = Math.random() < 0.5
    var random_index = Math.floor(Math.random() * fakeData.fanTokens.length)
    if(random_boolean){
      fakeData.fanTokens[random_index].value += 1
      fakeData.fanTokens[random_index].trend = 'up'
    }else{
      fakeData.fanTokens[random_index].value -= 1
      fakeData.fanTokens[random_index].trend = 'down'
    }
    
  }, 3000)
})




function handleRequest(req, res){ // para api reqs
  if (req.url == '/') { //check the URL of the current request
  // set response header
  res.writeHead(200, { 'Content-Type': 'text/html' }); 
  // set response content    
  res.write('<html><body><p>This is home Page.</p></body></html>');
  res.end();

}
else if (req.url == "/student") {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><p>This is student Page.</p></body></html>');
  res.end();
}
else if (req.url == "/admin") {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html><body><p>This is admin Page.</p></body></html>');
  res.end();

}
else
  res.end('Invalid Request!');
}