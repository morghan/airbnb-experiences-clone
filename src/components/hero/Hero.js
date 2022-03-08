import React from 'react';
import group from './group.png';
import './Hero.css';

export default function Hero() {
	return (
		<section className='hero'>
			<img src={group} alt='' className='heroImage' />

			<h1 className='heroTitle'>Online Experiences</h1>
			<p className='heroText'>
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</section>
	);
}
