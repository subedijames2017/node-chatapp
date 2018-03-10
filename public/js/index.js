let socket = io()
socket.on('connect', () => {
    console.log("Connected to the server");
})

socket.on('newMessage', (message) => {
    let formattedTime = moment(message.createdAt).format('h:mm a')
    let template = $('#message-template').html();
    let html = Mustache.render(template, {
        from: message.from,
        text: message.text,
        createdAt: formattedTime
    })

    $('#messages').append(html);



    // let formattedTime = moment(message.createdAt).format('h: mm a')
    // //Jquery code ---> Needs to be written in Vanilla JS
    // let li = $('<li></li>');
    // li.text(`${message.from} (${formattedTime}): ${message.text}`)

    // $('#messages').append(li);

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
    document.getElementById('usermessage').value = ""
})

