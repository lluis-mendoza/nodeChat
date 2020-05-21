var socket = io();
$('#chatBox').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        socket.emit('newmessage', {text: $('#chatBox').val(), timestamp: new Date()});  
    }
});
socket.on('newmessage', (data) => {
    console.log('Received!')
    $('#messages').append($('<li>').text(data.timestamp + " | " + data.text));
})
