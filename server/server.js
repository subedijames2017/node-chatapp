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

    socket.emit('newEmail', {
        from: "john@example.com",
        subject: "cool thing to say",
        text: "I'm not bragging but Imma be an aswesome programmer in near future"
    })

    socket.on('createEmail', (email) => {
        console.log("New email created", email);
    })

    socket.on('disconnect', () => {
        console.log("User disconnected")
    })
})


server.listen(PORT, () => {
    console.log(`App listening at port ${PORT}`)
})
