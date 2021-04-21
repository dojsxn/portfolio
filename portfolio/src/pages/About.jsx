import React from 'react';
import '../App.css';

import AboutText from '../components/AboutText/AboutText';
import AboutMe from '../components/AboutMe/AboutMe';
import AboutExp from '../components/AboutExp/AboutExp';
import AboutEdu from '../components/AboutEdu/AboutEdu';
import Nav from '../components/Nav/Nav.js';
import Footer from '../components/Footer/Footer.js';

export const About = () =>{
	return(
		<div>
		<Nav/>
			<AboutText/>
				<AboutMe/>
					<AboutExp/>
						<AboutEdu/>
							<Footer/>
		</div>
	);
}
