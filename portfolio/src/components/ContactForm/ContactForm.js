import React, {Component} from 'react';
import axios from 'axios';
import './ContactForm.scss';

class ContactForm extends Component{

	state={
		title: '',
		email: '',
		body: '',
	};

	handleChange = ({target}) => {
		const {name, value} = target;
		this.setState({[name]:value});
	};

	submit = (event) =>{
		event.preventDefault();

		const payload = {
			title: this.state.title,
			email: this.state.email,
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
				this.success();
			})
			.catch(() => {
				console.log('Internal Server Error');
			})
	};

	resetFormInputs = () =>{
		this.setState({
			title: '',
			email: '',
			body: ''
		});
	};

	success = () =>{
		this.setState({
			message: "thank you for your message! i will get back to your shortly!"
		});
	}


	render(){

		console.log('State:', this.state);


		return(
			<div className="contactForm">
				<h1 className="con-title">Let's create together?</h1>
				<p className="con-content">always curious on expanding my creavity, got something for me?</p>


			<div className="contact-cont">

			<form onSubmit={this.submit}>
				<div className="form-input-name">
					<p className="form-title">name</p>
					<input
						type="text"
						placeholder="Your Full Name"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
						required
					/>
				</div>

				<div className="form-input">
					<p className="form-title">email address</p>
					<input
						type="email"
						placeholder="Your Email Address"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						required
					/>
				</div>

				<div className="form-input">
				<p className="form-title">message</p>
					<textarea
					name="body"
					placeholder="Your Message..."
					cols="30"
					rows="10"
					value={this.state.body}
					onChange={this.handleChange}>
					</textarea>
				</div>

				<button className="form-submit">Submit</button>
			</form>

			</div>

			<div className="pmessage">
				<p className="pthank">{this.state.message}</p>
			</div>

			</div>

		);
	}
}

export default ContactForm;
