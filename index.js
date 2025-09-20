const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const dotenv=require('dotenv');

app.use(express.json());

dotenv.config();

app.use('/jwt', authRoutes);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});