const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
	treatment: { type: String, required: true },
	clinic: { type: String, required: true },
	
	completed: Boolean,
});

const Treatment = mongoose.model('Treatments', treatmentSchema);

module.exports = Treatment;