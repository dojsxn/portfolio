import React from 'react';
import './AboutMe.scss';

export const AboutMe = () =>{
	return(
<div className="aboutmeSection">
		<h1 className="title">About Me</h1>
			<p className="content">I recently graduated from the Interactive Multimedia Management Program at Sheridan College where I further developed my skills in design + development.
			I’ve built a wide range of fun, impactful and interactive digital experiences & products.
			Prior to this, I studied Advertising & Marketing Communications, and worked with digital out-of-home advertising in Toronto. With my experience,
			I have had the opportunity to learn & create many digital solutions inside and outside the web. My passion in collaborative creation drives my approach to all things I create and design.
			I am a creative thinker who is always curious with mixing collaboration + creation to create engaging digital experiences and products!
			</p>

		<h2 className="title-2">Skills</h2>

		<div className="skills">
				<div className="container-1">
					<p className="title-3">Design</p>
					<p className="skill">+ Branding</p>
					<p className="skill">+ Mobile & Wearble</p>
					<p className="skill">+ Product/Experience</p>
					<p className="skill">+ Sketching & Prototyping</p>
					<p className="skill">+ Usability Testing</p>
					<p className="skill">+ Visual & Interaction</p>
					<p className="skill">+ Wireframing</p>
				</div>

				<div className="container-2">
					<p className="title-3">Development</p>
					<p className="skill">+ Back-End</p>
					<p className="skill">+ CMS</p>
					<p className="skill">+ Databases</p>
					<p className="skill">+ Front-End</p>
					<p className="skill">+ Interactive Coding</p>
					<p className="skill">+ Web Design</p>
				</div>
		</div>

		<h3 className="title2">Tools</h3>

		<div className="skills">
				<div className="container-1">
					<p className="title-3">Design</p>
					<p className="skill">+ Adobe Creative Suite</p>
					<p className="skill">+ Figma</p>
					<p className="skill">+ TinkerCAD</p>
					<p className="skill">+ SparkAR</p>
				</div>

				<div className="container-2">
					<p className="title-3">Development</p>
					<p className="skill">HTML, CSS, JavaScript</p>
					<p className="skill">+ Node, Express</p>
					<p className="skill">+ PHP, PDO, MySQL</p>
					<p className="skill">+ React, Vue, jQuery</p>
					<p className="skill">+ SASS, SCSS, Bootstrap</p>
					<p className="skill">+ ZIM, ThreeJS</p>
				</div>
		</div>

</div>
	);
}

export default AboutMe;
