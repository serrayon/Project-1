//SECTION  Modules
const express = require('express');
const db = require('./models')
const bodyParser = require('body-parser');
//SECTION  Instanced Modules
const app = express();
const routes = require('./routes');

//SECTION System configuration variables
const PORT = process.env.PORT || 4000;

// -------------------------------- MIDDLEWARE -------------------------------- //
//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Serve Static Assets
app.use(express.static(`${__dirname}/public`));

//SECTION Middleware
app.use(express.json());  //body parser built into express

app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

//SECTION Routes
app.get('/', (req, res) =>{
    res.json({ status: 200, message: 'OK' });
});


// -------------------------------- API ENDPOINTS -------------------------------- //

  

  app.use('/api/v1/books', routes.books);
  app.use('/api/v1/users', routes.users);
  app.use('/api/v1/comments', routes.comments);

//SECTION  Server listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
