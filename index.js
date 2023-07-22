const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors());

const connectDB = require('./connect/connect');

const authRouter = require('./routes/auth');
const messageRoutes = require('./routes/messages');
app.use('/api/v1', authRouter);
app.get('/', (req, res) => res.send('hi'));
app.use("/api/v1/messages", messageRoutes);

const port = 8080;
let server;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, () =>
      console.log(`Server is running on port http://localhost:${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
const socket = require('socket.io');
const io = socket(server, {
  cors: {
    origin: 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header']
  }
});
global.onlineUsers = new Map();
io.on('connection', socket => {
  global.chatSocket = socket;
  socket.on('add-user', userId => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on('send-msg', data => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-recieve', data.msg);
    }
  });
});
