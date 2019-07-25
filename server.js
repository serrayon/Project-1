//SECTION  Modules
const express = require('express');
const db = require('./models')
const bodyParser = require('body-parser');
//SECTION  Instanced Modules
const app = express();
const routes = require('./routes');
const session = require('express-session')

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

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
  cookie: {originalMaxAge: 300000000}
}));
// Session for current user
app.use(function(req,res,next){
   if(req.session.user_id){
		 		db.User.find({_id: req.session.user_id}, (err, users) => {
					const user = users[0];
					if (user) {
						req.currentUser = user;
					}
					next();
				})
   } else {
      req.currentUser = null;
      next();
   }
});

app.use('/login', routes.login);
app.use('/api/v1/books', routes.books);
app.use('/api/v1/users', routes.users);
app.use('/api/v1/comments', routes.comments);
app.use('/', routes.views);


app.get('/', (req, res) => {
	res.sendFile(`${__dirname}/views/index.html`);
});

//SECTION Routes
app.get('/', (req, res) =>{
    res.json({ status: 200, message: 'OK' });
});


// -------------------------------- API ENDPOINTS -------------------------------- //





//SECTION  Server listener
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
