import React from 'react';
import '../App.css';

import Projectunfold from '../components/unfold/unfold';
import Footer from '../components/Footer/Footer.js';

export const unfold = () =>{
	return(
		<div>
			<Projectunfold/>
			<Footer/>
		</div>
	);
}
