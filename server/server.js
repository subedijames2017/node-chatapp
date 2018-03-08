const express = require("express");
const app = express();
const http = require('http');
const path = require("path");
const socketIO = require("socket.io");


const publicPath = path.join(__dirname, "../public");
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server)

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New User connected!");

    socket.on('createMessage', (message)=>{
        console.log("Created Message", message);
        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        })
    })
    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})


server.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})
