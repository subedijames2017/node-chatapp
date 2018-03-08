let socket = io()
socket.on('connect', () => {
    console.log("Connected to the server");
})

socket.on('newMessage', (message) => {
    console.log("New Message", message);
    let li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`)

    $('#messages').append(li);

})

socket.on('disconnect', () => {
    console.log("Disconnected from the server")
})

document.getElementById("message-form").addEventListener("submit", (e) => {
    e.preventDefault();

    socket.emit("createMessage", {
        from: 'User',
        text: document.getElementById('usermessage').value
    }, () => {

    })
    document.getElementById('usermessage').value=""
})

