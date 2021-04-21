import React from 'react';
import './classtrack.scss';
import ctcover from '../../assets/classtrack/cover.png';
import ctuser from '../../assets/classtrack/classtrack_UF.png';
import ctwire from '../../assets/classtrack/classtrack_WF.png';
import ctfinal1 from '../../assets/classtrack/classtrack_f1.png';
import ctfinal2 from '../../assets/classtrack/classtrack_f2.png';
import ctfinal3 from '../../assets/classtrack/classtrack_f3.png';
import ctfinal4 from '../../assets/classtrack/classtrack_f4.png';

export const classtrack = ()=>{
	return(
	<div className="project-page1">

		<div className="pro-cover">
				<div className="pro-txt">
					<h2 className="pro-title">UX/UI Design, Design Case Study, Mobile Interaction Design</h2>
					<h1 className="pro-name">classtrack</h1>
					<p className="pro-content">Manage, track and organize class timetables & deadlines.</p>
				</div>

				<div className="pro-img">
					<img className="pro-image" src={ctcover} width="765" height="400" alt="Logo"/>
				</div>
		</div>

		<div className="pro-overview">
			<div className="pro-txt">
				<p className="pro-txt-title">Overview</p>
				<p className="pro-txt-content">Classtrack is an app to manage, track and organize class timetables & deadlines. Allowing students to maintain academic organization and time management, students are able to view when they have class & specific deadlines for their classes. </p>

				<p className="pro-txt-title2">Tools</p>
				<p className="pro-txt-content">Adobe XD, Adobe Photoshop, Adobe Illustrator </p>

				<p className="pro-txt-title2">My Roles & Tasks</p>
				<p className="pro-txt-content">Idea Sketching, Wireframing, Prototyping, User Researcher</p>

				<p className="pro-txt-title2">Process</p>
				<p className="pro-txt-content">User Research + Testing, 8-6-42 Prototyping Method, Adobe XD Wireframes, Prototyping.</p>
			</div>
		</div>

		<div className="pro-challenge">
			<div className="pro-txt">
				<p className="pro-txt-title">Challenge Statement</p>
				<p className="ptxt4">“Students need a convenient application to view, manage and track their classes and deadlines.”</p>

				<p className="pro-txt-title">Problem/Background</p>
				<p className="ptxt3">As a student learning in an online environment, there are many challenges in managing and organizing time which can reduce academic success. As such, maintaining and organizing academic deadlines can be difficult for students. Especially in today’s virtual learning environment, students can feel lost in the endless waves of dates & deadlines.</p>
			</div>
		</div>

		<div className="pro-solution1">
		<div className="pro-txt">
		<p className="pro-txt-title">Solution</p>
			<p className="ptxt">The idea was to promote academic organization with an application that would assist students in managing & organizing their time and deadlines. The solution aims to provide students with relevant information regarding when they have classes and when specific deadlines are due.</p>
			</div>
		</div>

		<p className="pro-txt-title">Userflow</p>
		<div className="pro-userflow">
			<img className="uf-image" src={ctuser} width="785" height="590" alt="Logo"/>
		</div>

		<p className="pro-txt-title">Wireframes</p>
		<div className="pro-wireframes">
			<img className="uf-image" src={ctwire} width="785" height="590" alt="Logo"/>
		</div>

		<p className="pro-txt-title">Final Mockups</p>
		<div className="pro-final">
			<img className="pfinal" src={ctfinal1} width="225" height="355" alt="Logo"/>
			<img className="pfinal" src={ctfinal2} width="225" height="355" alt="Logo"/>
			<img className="pfinal" src={ctfinal3} width="225" height="355" alt="Logo"/>
			<img className="pfinal" src={ctfinal4} width="225" height="350" alt="Logo"/>
		</div>

		<div className="pro-future">
			<div className="pro-txt">
				<p className="pro-txt-title">Future Outlook & Continuing Steps</p>
				<p className="ptxt">I will look to continue to work and develop classtrack in the future, refining and developing more features that promote academic organization among students. With the general idea of the application in mind, I would like to integrate classtrack into a full mobile app. </p>

				<p className="pro-txt-title">Learning & Lessons</p>
				<p className="ptxt">This was my first time designing for a wearable. My first challenge when designing classtrack was the size of smartwatches, as there is a greater restriction on screen size than other devices. I had to be more creative and design focused when thinking about the information I would display on the app. I had to think about adjustments in visuals & texts and how they would be impacted based on the screen size. </p>
			</div>
		</div>

		<div className="pro-linking1">
			<a className="p-link3" href="/#work">explore my other projects!→</a>
		</div>


	</div>
	)
}

export default classtrack;
