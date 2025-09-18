const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const  jwt = require('jsonwebtoken');

app.use(express.json());


app.use('/jwt', authRoutes);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});