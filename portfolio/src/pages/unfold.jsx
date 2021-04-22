import React from 'react';
import '../App.css';

import Projectunfold from '../components/unfold/unfold';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';

export const unfold = () =>{
	return(
		<div>
			<Nav/>
			<Projectunfold/>
			<Footer/>
		</div>
	);
}
