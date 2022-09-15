const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
	title: { type: String, required: true },
	author: { type: String, required: true },
	
	completed: Boolean,
});

const Treatment = mongoose.model('Treatment', treatmentSchema);

module.exports = Treatment;