//SECTION  Modules
const express = require('express');
const db = require('./models')

//SECTION  Instanced Modules
const app = express();

//SECTION System configuration variables
const PORT = process.env.PORT || 4000;

//SECTION Middleware
app.use(express.json());  //body parser built into express

//SECTION Routes
app.get('/', (req, res) =>{
    res.json({ status: 200, message: 'OK' });
});

//SECTION  Server listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
