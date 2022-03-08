import React from 'react';
import airBnbLogo from './airbnb.png';
import './Navbar.css';

export default function Navbar() {
	return (
		<nav className='navbar'>
			<img src={airBnbLogo} alt='' />
		</nav>
	);
}
