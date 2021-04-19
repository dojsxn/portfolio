import React from 'react';
import './HomeCover.scss';


export const HomeCover = ()=>{
	return(
		<div className="homeCover">
		<p className="c-title">curiously created</p>
		<h1 className="c-title-main">by Jason Do</h1>
			<p className="c-intro">Digital Experience Designer in Toronto.
			Always curious about creating collaborative user experiences. I strive to design and create meaningful digital products that are intuitive + impactful.
			</p>

			<p className="c-text">connect with me @<a className="c-link" href="mailto:jasonn.doo@gmail.com">jasonn.doo@gmail.com</a></p>
			<p className="c-text">explore my work below!</p>

		</div>
	)
}

export default HomeCover;
