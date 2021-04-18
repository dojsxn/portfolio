const mongoose = require('mongoose');



// Schema
const Schema = mongoose.Schema;
const FormSchema = new Schema({
	title: String,
	body: String,
	date: {
		type: String,
		default: Date.now()
	}
});

//Model
const Form = mongoose.model('Form', FormSchema);

module.exports = Form;
