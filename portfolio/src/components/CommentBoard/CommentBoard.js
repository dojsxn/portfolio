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
			const data = [response.data];
			this.setState({comments: data});
			console.log('Data has been recieved!!!');
		})
		.catch(()=>{
			console.log('Error getting data');
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
			<div className="com-box" key={index}>
				<h4 className="com-name">{comments.title}</h4>
				<p className="com-body">{comments.body}</p>
			</div>
		));
	};


	render(){

		return(
			<div className="commentForm">

			<h1 className="com-title-2">Psst....Leave a Message!</h1>
			<p className="con-content">Mark your journey through my portfolio below!</p>

			<div className="co-form">
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
				<p className="form-title">comment</p>
					<textarea
					name="body"
					placeholder="Your Comment..."
					cols="5"
					rows="2"
					value={this.state.body}
					onChange={this.handleChange}>
					</textarea>
				</div>

				<button className="form-submit">Submit</button>
			</form>
			</div>

			<div className="comments">
				<p className="com-title">Comments</p>
				{this.displayComments(this.state.comments)}
			</div>

			</div>
		);
	}
}

export default CommentBoard;
