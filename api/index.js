import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Adicione esta linha
import db from './database/configdb.js';
import userRoute from './routes/user.route.js';
import contactRoute from './routes/contact.route.js';

dotenv.config();
db.connect();

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use("/users", userRoute);
app.use("/contacts", contactRoute);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});