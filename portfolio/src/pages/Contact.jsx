import React, {Component} from 'react';

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
