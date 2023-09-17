import express from 'express';
import mongoose, { ConnectOptions } from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

import { User } from './userSchema';
import { createSocket } from './socket';
// Create an Express app
const app = express();
const port = process.env.PORT || 5000;
const mongodbuser = process.env.MONGODB_USER;
const mongodbpass = process.env.MONGODB_PASS;
console.log(mongodbuser, mongodbpass);
// Connect to MongoDB
mongoose.connect(`mongodb+srv://${mongodbuser}:${mongodbpass}@cluster0.lurgb3m.mongodb.net/?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
app.use(cors({
  origin: '*',
}));

// Create a Socket.IO server and attach it to the Express app
const io = createSocket(app);

const sendUsersData = () => User.find({}, '-password').then((users) => {
  io.emit('data', users);
})
io.on('connection', sendUsersData);
// send data through socket when a change is detected in User collection
User.watch().on('change', sendUsersData);

// Needed to check if the server is running from browser
app.get('/', (req, res) => {
  res.send('Hello, MongoDB!');
});

app.use(bodyParser.json());

// Define a POST endpoint to receive the payload
app.post('/api/signup', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    res.status(400).json({ error: 'Username and password are required.' });
  } else {
    try {
      const user = new User(req.body);
      await user.save();
    } catch (error) {
      res.status(500).json({ error: 'Error creating user.' });
    }
    res.json({ message: 'Sign up successful!' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
