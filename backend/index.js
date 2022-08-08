import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import playerRoutes from './routes/soccerRoutes';
import cors from 'cors';
import { userRoutes } from "./routes/userRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";

const app = express();
const PORT = 4000;

// bodyparser setup 
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// CORS setup
app.use(cors());

playerRoutes(app)
userRoutes(app);
authRoutes(app);

app.get('/', (req, res) => {
    res.send(`Our soccer application is running ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Your soccer server is running on port ${PORT}`)
})

// mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/soccerDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connect to MongoDB.");
})
.catch(err => {
    console.error("Connection error", err);
    process.exit();
});

