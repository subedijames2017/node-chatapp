let socket = io()
socket.on('connect', ()=>{
    console.log("Connected to the server");

    socket.emit("createEmail", {
        to : "uzz@gmail.com",
        text: "how you doin!"
    })
})

socket.on('disconnect', ()=>{
    console.log("Disconnected from the server")
})

socket.on('newEmail', (email)=>{
    console.log("You've got a new email", email);
})