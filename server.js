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



  //Comment create
  app.post('/api/v1/comments', (req ,res) => {
    const newComment = req.body;
  
    db.Comment.create(newComment, (err, createdComment) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again'});
  
      res.status(201).json({
        status: 201,
        data: createdComment,
        requestedAt: getTime(),
      });
    });
  });

  // Comment Destroy
app.delete('/api/v1/comments/:comment_id', (req, res) => {
    db.Comment.findByIdAndDelete(req.params.book_id, (err, deletedComment) => {
      if (err) return res.status(400).json({
        status: 400,
        message: 'Something went wrong, please try again',
      });
  
      console.log(deletedComment);
      res.status(200).json({
        status: 200,
        message: 'Success',
      });
    });
  });

  app.use('/api/v1/books', routes.books)


//SECTION  Server listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
