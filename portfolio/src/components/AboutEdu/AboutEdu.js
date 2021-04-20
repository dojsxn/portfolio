import React from 'react';
import './AboutEdu.scss';

export const AboutEdu = () =>{
	return(

	<div className="aboutEducation">
		<div className="edu1">
			<h1 className="title">Education</h1>
				<p className="e-title-2">Sheridan College - Interactive Media Management</p>
				<p className="e-title-3">September 2020 to April 2021 - Mississauga, ON</p>
				<p className="e-content">Creating, managing and developing web and mobile content. Learning and focused on interactivity, front-end coding, social media, user experience (UX) and emerging mobile technologies.
				As well, experiencing user-focused design applications and learning to create user interfaces with Adobe Creative Suites.</p>
		</div>

		<div className="edu">
			<p className="e-title-2">Sheridan College - Advertising & Marketing Communications</p>
			<p className="e-title-3">September 2017 to April 2020 - Mississauga, ON</p>
			<p className="e-content">Focused on the world of Advertising & Marketing Communications. In this program, I learned foundational advertising knowledge, media development, creative and account management.
			Working with students and professors to develop many advertising campaigns and proposals to real clients.</p>
		</div>

		<div className="pro-linking">
			<a className="p-link3" href="/#work">explore my projects!→</a>
		</div>

	</div>



	)
}

export default AboutEdu;
