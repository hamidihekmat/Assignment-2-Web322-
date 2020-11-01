const express = require('express');
const User = require('../models/userSchema');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).send(users);
	} catch (err) {
		res.send(err);
	}
});

router.post('/register', async (req, res) => {
	try {
		const { firstName, lastName, email, password } = req.body;
		const user = await new User({
			firstName,
			lastName,
			email,
			password,
		});
		const savedUser = await user.save();
		res.status(200).send(savedUser);
	} catch (err) {
		res.send(err);
	}
});

router.post('/signin', async (req, res, next) => {
	try {
		const { email, password } = req.body;
		if (!email || !password) throw new Error('email and password required');
		const user = await User.find({ email, password });
		if (!user || !user.length) {
			throw new Error('Incorrect email or password');
		}
		res.status(200).send(user);
	} catch (error) {
		next(error);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const user = await User.findById(id);
		res.status(200).send(user);
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;
