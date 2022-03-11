import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Card from './components/card/Card';
import cardData from './data';

export default function App() {
	const Cards = cardData.map((card) => {
		return (
			<Card
				key={card.id}
				coverImg={card.coverImg}
				rating={card.stats.rating}
				reviewCount={card.stats.reviewCount}
				location={card.location}
				title={card.title}
				price={card.price}
				openSpots={card.openSpots}
			/>
		);
	});
	return (
		<div>
			<Navbar />
			<Hero />
			<section className='cardsSection'>{Cards}</section>
		</div>
	);
}
