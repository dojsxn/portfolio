const express = require('express');

const router = express.Router();

const Form = require('../models/Form');

router.get('/', (req, res)=>{
	Form.find({})
		.then((data) => {
			console.log('Data: ', data)
			res.json(data);
	})
		.catch((error) => {
			console.log('error: ', errordata)
	});

});

router.post('/save', (req, res)=>{
	const data = req.body;

	const newForm = new Form(data);

	newForm.save((error)=>{
		if(error){
			res.status(500).json({msg:'Sorry, internal server errors'});
			return;
		}
		return res.json({
			msg: 'Message Recieved'
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
