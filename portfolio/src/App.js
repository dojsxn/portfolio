import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {Home} from './pages/Home.jsx';
import {About} from './pages/About.jsx';
import {Contact} from './pages/Contact.jsx';
import {cookdeck} from './pages/cookdeck.jsx';
import {classtrack} from './pages/classtrack.jsx';
import {unfold} from './pages/unfold.jsx';

import Nav from './components/Nav/Nav.js';
import Footer from './components/Footer/Footer.js';

class App extends Component {
	render(){
	return(
		<Router>
			<Switch>
				<Route path="/" exact component={Home}/>
				<Route path ="/about" exact component={About}/>
				<Route path ="/contact" exact component={Contact}/>
				<Route path ="/cookdeck" exact component={cookdeck}/>
				<Route path ="/classtrack" exact component={classtrack}/>
				<Route path ="/unfold" exact component={unfold}/>
			</Switch>
			<Nav/>
				<Footer/>
		</Router>
		);
	}
}
export default App;
