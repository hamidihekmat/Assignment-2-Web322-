// This file is not required

const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const postSchema = new Schema({
	title: { type: String, required: true },
	username: { type: String, required: true },
	body: { type: String, required: true },
	date: { type: Date, default: Date.now },
	meta: {
		votes: Number,
		favs: Number,
	},
});

module.exports = model('Post', postSchema);
