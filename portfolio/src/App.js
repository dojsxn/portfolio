import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
//import {Project} from './pages/Project.jsx';
//import {Contact} from './pages/Contact.jsx';
import Nav from './components/Nav/Nav.js';

class App extends Component {
	render(){
	return(
		<Router>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path ="/about" exact component={About}/>
				{/*
					//<Route path ="/project" exact component={Project}/>
					//<Route path ="/conect" exact component={Contact}/>
				*/}
			</Switch>
			<Nav/>
		</Router>
		);
	}
}
export default App;
