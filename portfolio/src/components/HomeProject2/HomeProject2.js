import React from 'react';
import './HomeProject2.scss';
import cdcover from '../../assets/cookdeck/cover.png';

export const HomeProject2 = ()=>{
	return(
		<div className="homeProject2">

			<div className="p-card">
				<p className="p-title"><a className="p-title" href="/cookdeck" target="_blank">cookdeck</a></p>
				<h2 className="p-title2">UX/UI Design, Front-End Development, Web Development</h2>
				<p className="p-content">cookdeck is a recipe web application that aims to provide recipes based on lifestyles. This app helps users view and select recipes based on their lives & lifestyle, providing a wide range of recipes for multiple lifestyles. </p>
				<a className="p-link" href="/cookdeck" target="_blank">explore more →</a>
			</div>

			<div className="p-image">
				<a className="p-imgs"href="/cookdeck" target="_blank"><img className="pimg" src={cdcover} width="765" height="400" alt="Logo"/></a>
			</div>

		</div>
	)
}

export default HomeProject2;
