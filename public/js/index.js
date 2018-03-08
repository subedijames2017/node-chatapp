let socket = io()
socket.on('connect', ()=>{
    console.log("Connected to the server");
})

socket.on('newMessage', (message)=>{
    console.log("New Message", message)
})

socket.on('disconnect', ()=>{
    console.log("Disconnected from the server")
})
