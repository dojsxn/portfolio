import React from 'react';
import './ContactForm.scss';

export const ContactForm = () =>{
	return(
		<div className="contactForm">
			<h1>hello</h1>
			<form>
			<div className="form-input">
				<input
				type="text"
				name="title"
				value=""
				onChange={2}
				/>
			</div>

			<div className="form-input">
				<textarea name="body" cols="30" rows="10" value="" onChange={2}></textarea>
			</div>

			<button>Submit</button>
			</form>
		</div>
	);
}

export default ContactForm;
