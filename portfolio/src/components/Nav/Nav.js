import React from 'react';
import './Nav.scss';

export const navBar = ()=>{
	return(
		<div className="navBar">

			<div className="logo-box">
				<a className="logo" href="/">jasondo.</a>
			</div>

			<div className="links-box">
				<a className="link2" href="/#work">work</a>
  				<a className="link1" href="/about">about</a>
				<a className="link3" href="/contact">contact</a>
				</div>
				
		</div>
	)
}

export default navBar;
