import React from 'react';
import './cookdeck.scss';
import cdcover from '../../assets/cookdeck/browser1.png';
import cdcover2 from '../../assets/cookdeck/browser2.png';
import cduser from '../../assets/cookdeck/cookdeck_UF.png';
import cdwire from '../../assets/cookdeck/cookdeck_WF.png';
import cdwire2 from '../../assets/cookdeck/cookdeck_WF2.png';
import cdwire3 from '../../assets/cookdeck/cookdeck_WF3.png';
import cdfinal from '../../assets/cookdeck/landing.png';
import cdfinal2 from '../../assets/cookdeck/page1.png';

export const cookDeck = ()=>{
	return(
	<div className="project-page3">

		<div className="pro-cover">
			<div className="pro-txt">
				<h2 className="pro-title">UX/UI Design, Front-End Development, Web Development</h2>
				<h1 className="pro-name">cookdeck</h1>
				<p className="pro-content">Explore, discover and cook recipes based on your lifestyle.</p>
			</div>

			<div className="pro-img">
				<img className="pro-image" src={cdcover} width="700" height="455" alt="Logo"/>
			</div>
		</div>

		<div className="pro-overview">
			<div className="pro-txt">
				<p className="pro-txt-title">Overview</p>
				<p className="pro-txt-content">cookdeck is a recipe web application that aims to provide recipes based on lifestyles. This app helps users view and select recipes based on their lives & lifestyle, providing a wide range of recipes for multiple lifestyles. </p>

				<p className="pro-txt-title2">Tools</p>
				<p className="pro-txt-content">HTML, CSS, JS, MySQL + PHP</p>

				<p className="pro-txt-title2">My Roles & Tasks</p>
				<p className="pro-txt-content">Front-End & Back-End Development, CMS Organization</p>

				<p className="pro-txt-title2">Process</p>
				<p className="pro-txt-content">User Research + Testing, Prototyping, Front-End & Back-End Development.</p>
			</div>

			<div className="pro-img">
				<img className="pro-image" src={cdcover2} width="700" height="455" alt="Logo"/>
			</div>
		</div>


		<div className="pro-challenge">
			<div className="pro-txt">
				<p className="pro-txt-title">Challenge Statement</p>
				<p className="ptxt4">“How can cookdeck tackle the challenge of constant changing lifestyles and dietary needs among Canadians?” </p>
			</div>
		</div>

		<div className="pro-solution">
			<p className="pro-txt-title">Solution</p>
			<p className="ptxt">The idea was to promote home cooking & healthy eating with an application that allows users to retrieve recipes based on lifestyles. The solution aims to provides users with relevant recipes based on their selected lifestyles. Recipes can vary in terms of ingredients required, prepping & cooking time and nutritional information. </p>
		</div>


		<div className="pro-userflow">
		<p className="pro-txt-title">Userflow</p>
			<img className="uf-image" src={cduser} width="785" height="590" alt="Logo"/>
		</div>

		<div className="pro-wireframes">
		<p className="pro-txt-title">Wireframes</p>
			<img className="pwire" src={cdwire} width="410" height="580" alt="Logo"/>
			<img className="pwire" src={cdwire2} width="410" height="580" alt="Logo"/>
			<img className="pwire" src={cdwire3} width="410" height="580" alt="Logo"/>
		</div>

		<div className="pro-final">
		<p className="pro-txt-title">Final Mockups</p>
			<img className="uf-image" src={cdfinal} width="765" height="430" alt="Logo"/>
			<img className="uf-image" src={cdfinal2} width="765" height="430" alt="Logo"/>
		</div>

		<div className="pro-future">
			<p className="pro-txt-title">Future Outlook & Continuing Steps</p>
			<p className="ptxt2">In the future, I would like to develop cookdeck into a mobile application that integrates the functionality of the web application. With my current concept & prototype, it would be interesting to see how I can further develop cookdeck into a full application.</p>

			<p className="pro-txt-title">Learning & Lessons</p>
			<p className="ptxt">With cookdeck, this was my first time designing and developing an application that focuses on health & food. I wanted cookdeck to be different in terms of functionality and design, where users can easily access relevant recipes in a unique web experience that is different from traditional recipe websites.</p>
		</div>

		<div className="pro-linking">
			<a className="p-link3" href="/">explore my other projects!→</a>
		</div>


	</div>
	)
}

export default cookDeck;
