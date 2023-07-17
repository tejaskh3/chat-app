// const dotenv = require('dotenv');
// dotenv.config();
// const exppress = require('express');
// const app = exppress();
// const cors = require('cors')
// const bodyparser = require('body-parser');
// app.use(bodyparser.json());
// app.use(cors());
// const { Server } = require('socket.io');
// //importing mongoose connect funciton
// const connectDB = require('./connect/connect');

// //routers
// const authRouter = require('./routes/auth');

// //routes
// app.use('/api/v1',authRouter);
// app.get('/', (req, res) => res.send('hi'));
// //connecting to server
// const port = 8080;
// // Create an io server and allow for CORS from http://localhost:3000 with GET and POST methods
// let server;
// const start = async () => {
//   try {
//     await connectDB(process.env.MONGO_URI);
//      server = app.listen(port, () =>
//       console.log(`server is on port https://localhost/${port}`)
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();

const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const { Server } = require('socket.io');
const connectDB = require('./connect/connect');

const authRouter = require('./routes/auth');

app.use('/api/v1', authRouter);
app.get('/', (req, res) => res.send('hi'));

const port = 8080;
let server;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    server = app.listen(port, () =>
      console.log(`Server is running on port http://localhost:${port}`)
    );

    const io = new Server(server, {
      cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
      },
    });

    io.on('connection', (socket) => {
      console.log(`User connected: ${socket.id}`);
      // Handle socket events here
    });
  } catch (error) {
    console.log(error);
  }
};

start();
