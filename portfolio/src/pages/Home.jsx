import React from 'react';
import '../App.css';

import HomeCover from '../components/HomeCover/HomeCover';
import HomeProject1 from '../components/HomeProject1/HomeProject1';
import HomeProject2 from '../components/HomeProject2/HomeProject2';
import HomeProject3 from '../components/HomeProject3/HomeProject3';
import Footer from '../components/Footer/Footer.js';

export const Home = () =>{
	return(
		<div>
			<HomeCover/>
				<HomeProject1/>
				<HomeProject2/>
				<HomeProject3/>
				<Footer/>
		</div>
	);
}
