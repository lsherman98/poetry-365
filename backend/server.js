const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const poemsRouter = require('./routes/api/poems')


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());
app.use('/poems', poemsRouter);


const uri = process.env.MONGO_URI;
mongoose
    .connect(uri, { dbName: "poems-database" })
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

