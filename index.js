const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

console.log("WebSocket server running on ws://localhost:8080, check testing app");

wss.on('connection', (ws) => {
    console.log("Unity connected");

    ws.on('message', (message) => {
        console.log("Received event from Unity:", message.toString());

        // Process the event and send a response if needed
        ws.send("Event received: " + message);
    });

    ws.on('close', () => {
        console.log("Unity disconnected");
    });
});
