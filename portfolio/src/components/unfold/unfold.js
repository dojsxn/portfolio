import React from 'react';
import './unfold.scss';
import ufcover from '../../assets/unfold/browser1.png';
import ufcover2 from '../../assets/unfold/browser2.png';
import ufuser from '../../assets/unfold/unfold_UF.png';
import ufwire from '../../assets/unfold/unfold_WF.png';
import ufwire2 from '../../assets/unfold/unfold_WF2.png';

import uffinal from '../../assets/unfold/landing.png';
import uffinal2 from '../../assets/unfold/page1.png';

export const unfold = ()=>{
	return(
	<div className="project-page3">

		<div className="pro-cover">
			<div className="pro-txt">
				<h2 className="pro-title">UX/UI Design, Front-End Development, Visual Responsive Web Design</h2>
				<h1 className="pro-name">unfold</h1>
				<p className="pro-content">Exploring creativity with Frameworks and Preprocessors </p>
			</div>

			<div className="pro-img">
				<img className="pro-image" src={ufcover} width="700" height="455" alt="Logo"/>
			</div>
		</div>


		<div className="pro-overview">
			<div className="pro-txt">
				<p className="pro-txt-title">Overview</p>
				<p className="pro-txt-content">unfold was a project focused on creating a responsive landing page utilizing CSS Frameworks + Preprocessors. unfold was a stepping stone project that allowed me to improve my front-end development skills and visual responsive web design skills. </p>

				<p className="pro-txt-title2">Tools</p>
				<p className="pro-txt-content">HTML, Bootstrap, SCSS</p>

				<p className="pro-txt-title2">My Roles & Tasks</p>
				<p className="pro-txt-content">Front-End Development</p>

				<p className="pro-txt-title2">Process</p>
				<p className="pro-txt-content">Branding + Imagery, Front-End Development, Responsive User Testing</p>
			</div>

			<div className="pro-img">
				<img className="pro-image" src={ufcover2} width="700" height="455" alt="Logo"/>
			</div>
		</div>

		<div className="pro-challenge">
			<div className="pro-txt">
				<p className="pro-txt-title">Challenge Statement</p>
				<p className="ptxt4">“How can I develop and design a visual responsive landing page with a CSS Framework + Preprocessor that is visually appealing and contains relevant information & imagery.”</p>
			</div>
		</div>

		<div className="pro-solution">
			<p className="pro-txt-title">Solution</p>
			<p className="ptxt">With the challenge in mind, I aimed to create a responsive landing page for creative students to find job opportunities. Using Bootstrap and SCSS, I wanted to design & develop a landing page that contained relevant information and imagery that can be developed into a full web application in the future.  </p>
		</div>

		<div className="pro-userflow">
		<p className="pro-txt-title">Userflow</p>
			<img className="uf-image" src={ufuser} width="785" height="590" alt="Logo"/>
		</div>

		<div className="pro-wireframes">
		<p className="pro-txt-title">Wireframes</p>
			<div className="pro-final2">
				<img className="pwire" src={ufwire} width="410" height="580" alt="Logo"/>
				<img className="pwire" src={ufwire2} width="410" height="580" alt="Logo"/>
			</div>
		</div>

		<div className="pro-final">
		<p className="pro-txt-title">Final Mockups</p>
			<div className="pro-final2">
				<img className="pwire" src={uffinal} width="765" height="430" alt="Logo"/>
				<img className="pwire" src={uffinal2} width="765" height="430" alt="Logo"/>
			</div>
		</div>

		<div className="pro-future">
			<p className="pro-txt-title">Future Outlook & Continuing Steps</p>
			<p className="ptxt2">Currently with the landing page in mind, the next steps would create a full web application that allows creative students to find job opportunities. As a future outlook, I would like to develop unfold into a tool that allows recruiters to find collaborative & creative students for their workplaces. </p>

			<p className="pro-txt-title">Learning & Lessons</p>
			<p className="ptxt2">Creating and developing with a CSS Framework & Preprocessor was the interesting part of the project. I enjoyed designing and developing with these front-end tools. I found myself creating, learning, and exploring at the same time with unfold, and it was enjoyable to experience and learn a new set of front-end development tools. </p>
		</div>

		<div className="pro-linking">
			<a className="p-link3" href="/">explore my other projects! →</a>
		</div>

	</div>
	)
}

export default unfold;
