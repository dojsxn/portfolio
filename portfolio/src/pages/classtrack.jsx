import React from 'react';
import '../App.css';

import Projectclasstrack from '../components/classtrack/classtrack';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';

export const classtrack = () =>{
	return(
		<div>
			<Nav/>
			<Projectclasstrack/>
			<Footer/>
		</div>
	);
}
