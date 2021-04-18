const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

const MONGODB_URI = 'mongodb+srv://doja:Starwars7@portfolio.3uxwk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI || 'mongodb://localhost/test', {
	useNewUrlParser:true,
	useUnifiedTopology: true
});

mongoose.connection.on('connected', ()=>{
	console.log('mongoose is connected!!')
});

app.use(express.json());
app.use(express.urlencoded({ extended:false }));


//HTTP request logger
app.use(morgan('tiny'));
app.use('/api', routes);
app.use('/capi', require('./routes/capi'))

app.listen(PORT, console.log(`Server is starting at ${PORT}`));
