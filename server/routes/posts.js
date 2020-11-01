// This is not needed, I was trying to learn rest api with mongo

const express = require('express');
const Post = require('../models/postSchema');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		console.log(posts);
		res.send(posts);
	} catch (err) {
		res.send(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		console.log(id);
		const post = await Post.findById(id);
		res.status(200).send(post);
	} catch (err) {
		res.send(err);
	}
});

router.post('/', async (req, res) => {
	const { title, username, body, meta } = req.body;
	try {
		console.log({ title, username, body, meta });
		const post = new Post({ title, username, body, meta });
		const savedPost = await post.save();
		console.log(savedPost);
		res.send(savedPost);
	} catch (err) {
		res.send(err);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const deletedPost = await Post.findByIdAndDelete(id);
		res.send(deletedPost);
	} catch (err) {
		res.send(err);
	}
});

module.exports = router;
