const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const CommentSchema = new Schema({
	title: String,
	body: String,
	date: {
		type: String,
		default: Date.now()
	}
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
