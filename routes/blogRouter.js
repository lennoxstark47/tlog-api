const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Blog = require('../models/blog');

router.post('/create', (req, res) => {
	const newBlog = new Blog({
		title: req.body.title,
		body: req.body.body,
		createdBy: req.body.createdBy,
	});

	newBlog
		.save()
		.then((data) => {
			console.log(data),
				res.status(200).json({
					message: 'Blog Sucessfully created',
					success: true,
					data: data,
				});
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Blog not created',
				success: false,
				data: err,
			});
		});
});

router.get('/browse', (req, res) => {
	Blog.find()
		.then((data) => {
			res.status(200).json({
				message: 'Blog Sucessfully retrieved',
				success: true,
				data: data,
			});
		})
		.catch((err) => {
			res.status(500).json({
				message: 'Blog not retrieved',
				success: false,
				data: err,
			});
		});
});

module.exports = router;
