const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const port = 3000
io.on('connection', (socket) => { 
    console.log(socket.id);
    // setTimeout(1000, () => {
    //     socket.emit("timestamp", { "timestamp": new Date()});
    // })
    socket.emit("hello", "world");
    socket.on("hello1", (args) => {
        console.log(args);
    })
});
app.get('/', (req, res) => {
    res.sendFile(__dirname+'/html/index.html')
})

server.listen(port, () => {
    console.log(`server listen on port ${port}`);
});