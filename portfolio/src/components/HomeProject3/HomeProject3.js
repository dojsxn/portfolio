import React from 'react';
import './HomeProject3.scss';
import ufcover from '../../assets/unfold/cover.png';

export const HomeProject3 = ()=>{
	return(
		<div className="homeProject3">

			<div className="p-card">
				<p className="p-title"><a className="p-title" href="/unfold" target="_blank">unfold</a></p>
				<h2 className="p-title2">UX/UI Design, Front-End Development, Visual Responsive Web Design</h2>
				<p className="p-content">
				unfold was a project focused on creating a responsive landing page utilizing CSS Frameworks + Preprocessors.
				unfold was a stepping stone project that allowed me to improve my front-end development skills and visual responsive web design skills.
				</p>
				<a className="p-link" href="/unfold" target="_blank">explore more →</a>
			</div>

			<div className="p-image">
				<a className="p-imgs"href="/unfold" target="_blank"><img className="pimg" src={ufcover} width="765" height="400" alt="Logo"/></a>
			</div>

		</div>
	)
}

export default HomeProject3;
