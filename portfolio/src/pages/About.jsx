import React, {Component} from 'react';
import '../App.css';

import AboutText from '../components/AboutText/AboutText';
import AboutMe from '../components/AboutMe/AboutMe';
import AboutExp from '../components/AboutExp/AboutExp';
import AboutEdu from '../components/AboutEdu/AboutEdu';
//import AboutSkills from '../components/AboutMe/AboutSkills';
//import AboutExperiences from '../components/AboutExperiences/AboutExperiences';

export const About = () =>{
	return(
		<div>
			<AboutText/>
				<AboutMe/>
					<AboutExp/>
						<AboutEdu/>
		</div>
	);
}
