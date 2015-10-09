var WebSocketServer = require('ws').Server;
var puerto = process.env.PORT || 5000;
var wss = new WebSocketServer({port: puerto});

wss.broadcast = function(data) {
    for(var i in this.clients) {
        this.clients[i].send(data);
    }
};

wss.on('connection', function(ws) {
    ws.on('message', function(message) {
        console.log(message);
        wss.broadcast(message);
    });
});
