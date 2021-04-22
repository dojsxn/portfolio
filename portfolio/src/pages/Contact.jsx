import React from 'react';
import '../App.css';

import ContactForm from '../components/ContactForm/ContactForm';
import CommentBoard from '../components/CommentBoard/CommentBoard';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';


export const Contact = () =>{
	return(
		<div>
			<Nav/>
			<ContactForm/>
				<CommentBoard/>
				<Footer/>
		</div>
	);
}
