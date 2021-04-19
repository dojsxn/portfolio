import React from 'react';
import '../App.css';

import Projectcookdeck from '../components/cookdeck/cookdeck';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';

export const cookdeck = () =>{
	return(
		<div>
			<Nav/>
			<Projectcookdeck/>
			<Footer/>
		</div>
	);
}
