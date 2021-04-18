import React, {Component} from 'react';
import axios from 'axios';
import './CommentBoard.scss';

class CommentBoard extends Component{

	state={
		title: '',
		body: '',
		comments: []
	};

	componentDidMount = () =>{
		this.getComment();
	};


	getComment = () =>{
		axios.get('/capi')
		.then((response) =>{
			const data = response.data;
			this.setState({comments: data});
			console.log('Data has been recieved!!!');
		})
		.catch(()=>{
			alert('Error getting data');
		});
	}

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
			url:'/capi/saveC',
			method: 'POST',
			data: payload
		})
			.then(() => {
				console.log('Data has been sent');
				this.resetFormInputs();
				this.getComment();
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

	displayComments = (comments) => {
		if (!comments.length) return null;


	return comments.map((comments, index)=>(
			<div key={index}>
			<h4>{comments.title}</h4>
			<p>{comments.body}</p>
			</div>
		));
	};


	render(){

		console.log('State:', this.state);


		return(
			<div className="contactForm">
			<h1>Done exploring? Leave a message of your journey.</h1>
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

			<div className="comments">
				{this.displayComments(this.state.comments)}
			</div>



			</div>
		);
	}
}

export default CommentBoard;
