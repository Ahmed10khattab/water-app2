// require("dotenv").config();
// require("./mongo_connection/mongo");
// const express = require("express");
// const app = express();
// const cors = require("cors");
// const mongoSanitize = require("express-mongo-sanitize");
// const xss = require("xss-clean");
// const bodyparser = require("body-parser");
// const auth = require("./routes/auth");
// const user = require("./routes/user");
// const setting = require("./routes/setting");

// app.use(
//   cors({
//     origin: "*",
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

// app.use(express.json({ limit: "100kb" }));
// app.use(bodyparser.json());

// app.use(mongoSanitize());
// app.use(xss());

// app.use("/auth/v1", auth);
// app.use("/user/v1", user);
// app.use("/setting/v1", setting);


// const PORT = process.env.PORT;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });





require("dotenv").config();
require("./mongo_connection/mongo");
const express = require("express");
const http = require("http"); // Required to use with Socket.IO
const cors = require("cors");
const socketIo = require("socket.io");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const bodyparser = require("body-parser");
const auth = require("./routes/auth");
const user = require("./routes/user");
const setting = require("./routes/setting");
const cookieParser=require('cookie-parser');
const app = express();


 app.use(cors())
// Middleware configuration
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json({ limit: "100kb" }));
app.use(bodyparser.json());
app.use(mongoSanitize());
app.use(xss());
app.use(cookieParser());


app.use("/auth/v1", auth);
app.use("/user/v1", user);
app.use("/setting/v1", setting);

// Create HTTP server and integrate with Socket.IO
const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true, 

  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

 
  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});


const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




















// require("dotenv").config();
// require("./mongo_connection/mongo");
// const express = require("express");
// const app = express();
// const http = require("http");
// const cors = require("cors");
// const mongoSanitize = require("express-mongo-sanitize");
// const xss = require("xss-clean");
// const bodyparser = require("body-parser");
// const socketIo = require("socket.io");
// const mqtt = require('mqtt');

// const auth = require("./routes/auth");
// const user = require("./routes/user");
// const setting = require("./routes/setting");

// // Create HTTP server for Socket.IO
// const server = http.createServer(app);

// // Socket.IO CORS configuration
// const io = socketIo(server, {
//   cors: {
//     origin: "http://localhost:5173", // Allow requests from your React app
//     methods: ["GET", "POST"],
//     credentials: true,
//   }
// });

// // MQTT Configuration
// const mqttServer = 'mqtt://broker.hivemq.com';
// const waterAppTopic = 'WaterApp/Data';

// // Connect to the MQTT broker
// const client = mqtt.connect(mqttServer);

// client.on('connect', () => {
//   console.log('Connected to MQTT broker');
//   client.subscribe(waterAppTopic, (err) => {
//     if (err) {
//       console.error('Failed to subscribe to topic:', waterAppTopic);
//     } else {
//       console.log('Subscribed to topic:', waterAppTopic);
//     }
//   });
// });

// client.on('message', (topic, message) => {
//   if (topic === waterAppTopic) {
//     console.log(`///////////////////////////////////////`);
//     console.log(`Message received on topic ${topic}: ${message.toString()}`);

//     // Parse the incoming JSON message
//     let data;
//     try {
//       data = JSON.parse(message.toString());
//     } catch (error) {
//       console.error('Failed to parse message as JSON:', error);
//       console.log(`///////////////////////////////////////`);
//       return;
//     }

//     console.log('Received data:', data);
//     console.log(`///////////////////////////////////////`);

//     // Extract UserId and send the data to the specific user via Socket.IO
//     if (data.UserId) {
//       io.to(data.UserId.toString()).emit('mqttData', data);
//       console.log(`Data sent to UserId: ${data.UserId}`);
//     }
//   }
// });

// // Socket.IO connection handler
// io.on('connection', (socket) => {
//   console.log('A user connected:', socket.id);

//   // Emit test message
//   socket.emit('msg', 'Hello socket worked success');

//   // Join room based on UserId
//   socket.on('joinRoom', (userId) => {
//     socket.join(userId);
//     console.log(`User with ID ${userId} joined room ${userId}`);
//   });

//   socket.on('disconnect', () => {
//     console.log(`Socket disconnected: ${socket.id}`);
//   });
// });

// // Express Middleware configuration
// app.use(
//   cors({
//     origin: "*", // This can be adjusted as needed
//     methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//     credentials: true,
//   })
// );

// app.use(express.json({ limit: "100kb" }));
// app.use(bodyparser.json());

// app.use(mongoSanitize());
// app.use(xss());

// // Route configuration
// app.use("/auth/v1", auth);
// app.use("/user/v1", user);
// app.use("/setting/v1", setting);

// // Start the server
// const PORT = process.env.PORT || 3000; // Fallback to port 3000 if not defined
// server.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });







