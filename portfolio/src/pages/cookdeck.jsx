import React from 'react';
import '../App.css';

import Projectcookdeck from '../components/cookdeck/cookdeck';
import Footer from '../components/Footer/Footer.js';

export const cookdeck = () =>{
	return(
		<div>
			<Projectcookdeck/>
			<Footer/>
		</div>
	);
}
