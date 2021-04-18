import React from 'react';
import './Footer.scss';

export const footerBar = ()=>{
	return(
		<div className="main-navBar">
			<nav className="navBar">
			<ul>
  				<li><a className="logo" href="/">jasondo.</a></li>

			<div className="links">
  				<li><a href="/about">about</a></li>
  				<li><a href="/">work</a></li>
				<li><a href="/contact">contact</a></li>
			</div>

			</ul>
			</nav>
		</div>
	)
}

export default footerBar;
