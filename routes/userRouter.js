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

router.post('/login', (req, res) => {
	const email = req.body.email;
	const password = req.body.password;
	User.findOne({ email: email })
		.then((user) => {
			if (user) {
				if (user.password !== password) {
					res.status(200).json({
						message: 'Password is incorrect',
						success: false,
						data: null,
					});
				} else {
					res.status(200).json({
						message: 'User logged in',
						success: true,
						data: user,
					});
				}
			} else {
				res.status(404).json({
					message: 'User not found',
					success: false,
					data: user,
				});
			}
		})
		.catch((err) => {
			res.status(500).json({
				message: 'User not logged in',
				success: false,
				data: err,
			});
		});
});

module.exports = router;
