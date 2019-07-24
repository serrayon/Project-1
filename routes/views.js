const express = require('express');
const router = express.Router();
const path = require('path');

// Middleware
router.use(express.static(path.join(__dirname, `../public`)));


router.get('/', (req, res) => {
	if (req.session.user_id) {
		res.redirect('main')
	} else {
		res.sendFile(path.join(__dirname,`../views/index.html`));
	}
});

router.get('/main', (req, res) => {
	console.log(req.currentUser)
	res.sendFile(path.join(__dirname,`../views/main.html`));
});

module.exports = router;
