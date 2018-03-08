let socket = io()
socket.on('connect', ()=>{
    console.log("Connected to the server");
})

socket.on('newMessage', (message)=>{
    console.log("New Message", message)
})

socket.emit('createMessage', {
    from: "newcheckUser@hotmail.com",
    text: "what is goin on guys!"
}, (data)=>{
    console.log("Message from the server: ", data)
})

socket.on('disconnect', ()=>{
    console.log("Disconnected from the server")
})

