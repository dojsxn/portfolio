import React from 'react';
import './HomeProject1.scss';


export const HomeProject1 = ()=>{
	return(
		<div id="work" className="homeProject1">

			<div className="p-card">
				<p className="p-title"><a className="p-title"href="/classtrack" target="_blank">classtrack</a></p>
				<h2 className="p-title2">UX/UI Design, Mobile Interaction Design</h2>
				<p className="p-content">classtrack is an app to manage, track and organize class timetables & deadlines. Allowing students to maintain academic organization and time management,
				students are able to view when they have class & specific deadlines for their classes.</p>
				<a className="p-link" href="/classtrack" target="_blank">explore more →</a>
			</div>

			<div className="p-image">
				<p>test</p>
			</div>

		</div>
	)
}

export default HomeProject1;
