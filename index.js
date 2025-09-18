const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');



app.get('/jwt', authRoutes);


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});