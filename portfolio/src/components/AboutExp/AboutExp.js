import React, {useEffect} from 'react';
import './AboutExp.scss';
import Aos from 'aos';
import "aos/dist/aos.css";

export const AboutExp = ()=>{
	useEffect(() => {
		Aos.init({ duration: 1000, easing: 'ease-in-sine', delay: 120});
	}, []);

	return(
	<div className="aboutExperience" data-aos="fade-up" data-aos-once="true">

		<div className="exps1">
			<h1 className="title">Experience</h1>
				<p className="e-title-2">Social Media Coordinator - Sheridan College</p>
				<p className="e-title-3">September 2019 to April 2020 - Mississauga, ON</p>
				<p className="e-content">I was responsible for communicating events and opportunities to students in the Advertising and Marketing Communications program.
				I managed and planned events for several social media channels to promote in real time.
				As well, managed the contact and communication of information regarding the Advertising and Marketing Communications program for social network users.
				</p>
		</div>

		<div className="exps">
				<p className="e-title-2">PAL Student Tutor - Sheridan College</p>
				<p className="e-title-3">September 2018 to April 2019 - Mississauga, ON</p>
				<p className="e-content">Responsible for tutoring, teaching and aiding students at Sheridan College, during my winter semester term in 2019.
				I was tasked with helping students with English work such as revising, grammar checking and proof-reading student work.
				</p>
		</div>

	</div>

	)
}

export default AboutExp;
