import React, {useEffect} from 'react';
import './HomeProject1.scss';
import ctcover from '../../assets/classtrack/cover.png';
import Aos from 'aos';
import "aos/dist/aos.css";

export const HomeProject1 = () => {
	useEffect(() => {
		Aos.init({ duration: 1000, easing: 'ease-in-sine', delay: 120});
	}, []);

	return(
		<div id="work" className="homeProject1" data-aos="fade" data-aos-once="true">

			<div className="p-card">
				<p className="p-title"><a className="p-title"href="/classtrack" target="_blank">classtrack</a></p>
				<h2 className="p-title2">UX/UI Design, Mobile Interaction Design</h2>
				<p className="p-content">classtrack is an app to manage, track and organize class timetables & deadlines. Allowing students to maintain academic organization and time management,
				students are able to view when they have class & specific deadlines for their classes.</p>
				<p><a className="p-link" href="/classtrack" target="_blank">explore more →</a></p>
			</div>

			<div className="p-image">
				<a className="p-imgs"href="/classtrack" target="_blank"><img className="pimg" src={ctcover} width="765" height="400" alt="Logo"/></a>
			</div>

		</div>
	)
}

export default HomeProject1;
