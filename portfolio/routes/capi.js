const express = require('express');

const router = express.Router();

const Comment = require('../models/Comment');

router.get('/', (req, res)=>{
	Comment.find({})
		.then((data) => {
			console.log('Data: ', data)
			res.json(data);
	})
		.catch((error) => {
			console.log('error: ', errordata)
	});

});

router.post('/saveC', (req, res)=>{
	const data = req.body;

	const newComment = new Comment(data);

	newComment.save((error)=>{
		if(error){
			res.status(500).json({msg:'Sorry, internal server errors'});
			return;
		}
		return res.json({
			msg: 'Comment Recieved!'
		});
	});
});

router.get('/name', (req, res)=>{
	const data = {
		username: 'test',
		name: 2
	};
	res.json(data);
});

module.exports = router;
