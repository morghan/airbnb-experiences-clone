import React from 'react';
import './Card.css';

export default function Card(props) {
	const photo = require('./' + props.img);
	const star = require('./star.png');
	return (
		<div className='card'>
			<img src={photo} className='cardImage' alt='nop' />
			<div className='cardInfo'>
				<div className='cardRating'>
					<img src={star} alt='' />
					<span>{props.rating}</span>
					<span className='cardReviews'>
						({props.reviewCount}) • {props.country}
					</span>
				</div>
				<p>{props.title}</p>
				<p>
					<span className='cardCost'>From ${props.price}</span> / person
				</p>
			</div>
		</div>
	);
}
