//SECTION  Modules
const express = require('express');
const db = require('./models')
const bodyParser = require('body-parser');
//SECTION  Instanced Modules
const app = express();

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

// Author Index
app.get('/api/v1/authors', (req, res) => {
    db.Author.find({}, (err, allAuthors) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });
  
      res.status(200).json({
        status: 200,
        numberOfResults: allAuthors.length,
        data: allAuthors,
        requestedAt: getTime(),
      });
    });
  });



//SECTION  Server listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
