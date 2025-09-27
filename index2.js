const express = require('express');
const app = express();
const postRoutes = require('./routes/authRoutes');
const dotenv=require('dotenv');

app.use(express.json());

dotenv.config();

app.use('/jwt', postRoutes);


app.listen(4000,()=>{
    console.log('Server is running on port 4000');
});