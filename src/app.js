import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRoutes.js';

dotenv.config();
mongoose.set("strictQuery", false);

const mongoDB = process.env.DATABASE;

mongoose.connect(mongoDB)
    .then(() => console.log('Connected to DB'))
    .catch(err => console.log(`Error connecting to DB: ${err}`));

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());    //middleware for JSON Parsing

// here are my routers
app.use('/api', userRouter);

// standart route
app.get('/', (req, res) => {
    res.send('Welcome to index page');
});




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
