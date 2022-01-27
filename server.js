const express = require('express') //Express paketini projeye dahil etme
const socket =require('socket.io') //Socket.io paketini projeye dahil etme

const app = express() //express başlatma

const server = app.listen(3005) //3000 portunu dinleme //Server kurulumu tamamdır

app.use(express.static('public')) //public klasörü altındaki html css ve browserdaki js kodlarını yönetme

const io = socket(server) //socket cagirma ve icerisine server i tanimlama

io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)

    })
    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
   
})
}) //connection kontrol


