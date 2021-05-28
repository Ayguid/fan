const http = require("http")
const socketIo = require("socket.io")
const port = process.env.PORT || 7070
const server = http.createServer().listen(port, () => {
  console.log("server running in port", port)
})

const io = socketIo(server, {
  cors: {
    origin: "*", // o,,, http://192.168.1.107:8080 puerto del servidor que hace el request, por ahora esta que acepte de todos lados
    methods: ["GET", "POST"],
  }
})




io.sockets.on("connection", (socket) => {

  
  io.emit("mount", 'ready');
  

  // socket.on('message', (evento, nro) => {
  //   io.emit('output_changed', 1)
  // })

  setInterval(() => {
    io.emit("message", 'change')
  }, 3000)



})


