const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/register', (req, res) => {
	const newUser = new User({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	});

	newUser
		.save()
		.then((data) => {
			console.log(data),
				res.status(200).json({
					message: 'User Sucessfully created',
					success: true,
					data: data,
				});
		})
		.catch((err) => {
			res.status(500).json({
				message: 'User not created',
				success: false,
				data: err,
			});
		});
});

router.post('/login', (req,res) => {
    
})

module.exports = router;
