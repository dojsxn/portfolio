import React, {useEffect} from 'react';
import './HomeProject3.scss';
import ufcover from '../../assets/unfold/landing.png';
import Aos from 'aos';
import "aos/dist/aos.css";

export const HomeProject3 = ()=>{
	useEffect(() => {
		Aos.init({ duration: 1000, easing: 'ease-in-sine', delay: 120});
	}, []);

	return(
		<div className="homeProject3" data-aos="fade-up" data-aos-once="true">

			<div className="p-card">
				<p className="p-title"><a className="p-title" href="/unfold" target="_blank">unfold</a></p>
				<h2 className="p-title2">UX/UI Design, Front-End Development, Visual Responsive Web Design</h2>
				<p className="p-content">
				unfold was a project focused on creating a responsive landing page utilizing CSS Frameworks + Preprocessors.
				unfold was a stepping stone project that allowed me to improve my front-end development skills and visual responsive web design skills.
				</p>
				<p><a className="p-link" href="/unfold" target="_blank">explore more →</a></p>
			</div>

			<div className="p-image">
				<a className="p-imgs"href="/unfold" target="_blank"><img className="pimg" src={ufcover} width="765" height="400" alt="Logo"/></a>
			</div>

		</div>
	)
}

export default HomeProject3;
