import React from 'react';
import './Card.css';

export default function Card(props) {
	//It's cleaner to use template literals over concatenation
	const photo = require(`../../images/${props.coverImg}`);
	const star = require('./star.png');

	//Logic for displaying the correct badge text
	let badgeText;
	if (props.openSpots === 0) {
		badgeText = 'SOLD OUT';
	} else if (props.location === 'Online') {
		badgeText = 'ONLINE';
	}

	return (
		<div className='card'>
			{badgeText && <div className='cardBadge'>{badgeText}</div>}
			<img src={photo} className='cardImage' alt='nop' />
			<div className='cardInfo'>
				<div className='cardRating'>
					<img src={star} alt='' />
					<span>{props.rating}</span>
					<span className='cardReviews'>
						({props.reviewCount}) • {props.location}
					</span>
				</div>
				<p className='cardTitle'>{props.title}</p>
				<p>
					<span className='cardCost'>From ${props.price}</span> / person
				</p>
			</div>
		</div>
	);
}
