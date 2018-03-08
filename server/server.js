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

    socket.emit('newMessage', {
        from: "johndoe@example.com",
        text: "how you doin these days",
        createdAt: 12345
    })

    socket.on('createMessage', (newMessage)=>{
        console.log("Created Message", newMessage);
    })

    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})


server.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})
