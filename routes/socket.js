const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const port = 3000;

let waterConsumption = 0;

// Simulate water consumption data update from a sensor
function updateWaterConsumption() {
  // This would be replaced by actual sensor data
  waterConsumption += Math.random(); // Simulating consumption increase
}

// WebSocket setup for real-time updates
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');

  const sendWaterConsumption = () => {
    if (ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify({ liters: waterConsumption }));
    }
  };

  // Send the current consumption every second
  const intervalId = setInterval(sendWaterConsumption, 1000);

  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(intervalId);
  });
});

// REST API endpoint for initial fetch
app.get('/api/water-consumption', (req, res) => {
  res.json({ liters: waterConsumption });
});

server.listen(port, () => {
  console.log('Server is running on http://localhost:${port}');
  setInterval(updateWaterConsumption, 1000); // Update consumption every second
});