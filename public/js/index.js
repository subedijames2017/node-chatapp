let socket = io()
socket.on('connect', ()=>{
    console.log("Connected to the server");

    socket.emit('createMessage', {
        from: "uzz@gmail.com",
        text: "I am doing jst fine man!"
    })

})

socket.on('newMessage', (message)=>{
    console.log("New Message", message)
})

socket.on('disconnect', ()=>{
    console.log("Disconnected from the server")
})
