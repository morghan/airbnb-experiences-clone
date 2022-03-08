import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';

export default function App() {
	return (
		<div>
			<Navbar />
			<Hero />
			<Card
				img='katie-zaferes.png'
				rating='5.0'
				reviewCount={6}
				country='USA'
				title='Life lessons with Katie Zaferes'
				price={136}
			/>
		</div>
	);
}
