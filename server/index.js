const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// environment varianle
dotenv.config();

// Connect to db
mongoose.connect(
	process.env.DB_CONNECT,
	{ useUnifiedTopology: true, useNewUrlParser: true },
	() => console.log('Connected to database')
);

// Routes
//const postRoute = require('./routes/posts');
const userRoute = require('./routes/users');

const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
// Error handling error

// posts
// app.use('/posts', postRoute);
// users
app.use('/users', userRoute);

// Express Error handler
app.use(function (error, req, res, next) {
	res.status(401).send({
		error: error.message,
	});
});

// Production
if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
