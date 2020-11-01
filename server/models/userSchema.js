const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
	firstName: { type: String, required: true, min: 6, max: 255 },
	lastName: { type: String, required: true, min: 6, max: 255 },
	email: { type: String, required: true, min: 6, max: 255, unique: true },
	password: { type: String, required: true, min: 6, max: 255 },
	date: { type: Date, default: Date.now },
});

module.exports = model('User', userSchema);
