import React from 'react';
import '../App.css';

import ContactForm from '../components/ContactForm/ContactForm';
import CommentBoard from '../components/CommentBoard/CommentBoard';


export const Contact = () =>{
	return(
		<div>
			<ContactForm/>
				<CommentBoard/>
		</div>
	);
}
