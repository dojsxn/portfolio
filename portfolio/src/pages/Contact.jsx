import React from 'react';
import '../App.css';

import ContactForm from '../components/ContactForm/ContactForm';
import CommentBoard from '../components/CommentBoard/CommentBoard';
import Footer from '../components/Footer/Footer.js';


export const Contact = () =>{
	return(
		<div>
			<ContactForm/>
				<CommentBoard/>
				<Footer/>
		</div>
	);
}
