const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRouter');
const blogRouter = require('./routes/blogRouter');

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/user', userRouter);
app.use('/blog', blogRouter);

const PORT = 5000 || process.env.PORT;

mongoose
	.connect(process.env.MONGO_URI)
	.then((data) => {
		console.log(
			'Mongodb successfully connected....'
		);
	})
	.catch((err) => {
		console.log(err);
	});

app.listen(PORT, () => {
	console.log(`Server is running on ${PORT}`);
});
