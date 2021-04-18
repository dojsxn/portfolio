import React, {Component} from 'react';
import axios from 'axios';
import './ContactForm.scss';

class ContactForm extends Component{

	state={
		title: '',
		body: ''
	};

	handleChange = ({target}) => {
		const {name, value} = target;
		this.setState({[name]:value});
	};

	submit = (event) =>{
		event.preventDefault();

		const payload = {
			title: this.state.title,
			body: this.state.body
		};

		axios({
			url:'/api/save',
			method: 'POST',
			data: payload
		})
			.then(() => {
				console.log('Data has been sent');
				this.resetFormInputs();
			})
			.catch(() => {
				console.log('Internal Server Error');
			})
	};

	resetFormInputs = () =>{
		this.setState({
			title: '',
			body: ''
		});
	};

	render(){

		console.log('State:', this.state);


		return(
			<div className="contactForm">
			<h1>Let's create together?</h1>
			<form onSubmit={this.submit}>
				<div className="form-input">
				<input
					type="text"
					placeholder="Your Full Name"
					name="title"
					value={this.state.title}
					onChange={this.handleChange}
				/>
				</div>
				<div className="form-input">
					<textarea
					name="body"
					placeholder="Your Message..."
					cols="30"
					rows="10"
					value={this.state.body}
					onChange={this.handleChange}>
					</textarea>
				</div>

				<button>Submit</button>
			</form>
			</div>
		);
	}
}

export default ContactForm;
