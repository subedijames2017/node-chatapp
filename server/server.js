const express = require("express");
const app = express();
const http = require('http');
const path = require("path");
const {generateMessage} = require("./utils/message")
const socketIO = require("socket.io");


const publicPath = path.join(__dirname, "../public");
const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server)

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log("New User connected!");

    socket.on('createMessage', (message, callback)=>{
        console.log("Created Message", message);
        io.emit('newMessage',generateMessage(message.from, message.text));
        callback('Message sent');

        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createAt: new Date().getTime()
        // })
    })
    

    socket.emit('newMessage',generateMessage('Admin', 'Welcome to the chat app'));

    socket.broadcast.emit('newMessage',generateMessage('Admin', 'New User joined'));

    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})


server.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})
