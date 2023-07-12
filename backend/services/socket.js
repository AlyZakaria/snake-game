const port = 3000
const io = require('socket.io')
const socket = io();

socket.on('connection', (socket) => {
    console.log('a new client connected')
})

socket.listen(port);
console.log(`Socket is listening on port ${port}`);

module.exports = socket