var fakeData = require('./fakeData.js')

const http = require("http")
const url = require('url');
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

var fanTokens = fakeData.fanTokens // reemplazaremo

io.sockets.on("connection", (socket) => {


  io.emit("mount", 'ready')
  
  // socket.on('message', (evento, nro) => {
  //   io.emit('output_changed', nro)
  // })

  setInterval(() => {
    // console.log('Tokens updated')
    io.emit("message", fanTokens)
    var random_boolean = Math.random() < 0.5
    var random_index = Math.floor(Math.random() * fanTokens.length)
    if(random_boolean){
      fanTokens[random_index].value += 1
      fanTokens[random_index].trend = 'up'
    }else{
      fanTokens[random_index].value -= 1
      fanTokens[random_index].trend = 'down'
    }
  }, 3000)

})




function handleRequest(req, res){ // para api reqs
//   console.log(req.url == '/') 
  if (req.url == '/') { //check the URL of the current request
  // set response header
  res.writeHead(200, { 'Content-Type': 'text/html' }) 
  // set response content    
  res.write('<html><body><p>This is home Page.</p></body></html>')
  res.end()

}
else if (req.url.startsWith("/api/fanTokens")) {
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.write(JSON.stringify(fanTokens))
  res.end()
}
else if (req.url == "/admin") {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('<html><body><p>This is admin Page.</p></body></html>')
  res.end()
}
else
  res.end('Invalid Request!')
}




