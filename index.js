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
  } catch (error) {
    console.log(error);
  }
};

start();
