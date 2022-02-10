import React from 'react';
import './Link.style.scss';

const Link = ({ varient, children }) => {
	switch (varient) {
		case 'logo':
			return (
				<a href='#home' className='header-logo'>
					{children}
				</a>
			);
		case 'nav-item':
			return (
				<a href='#home' className='nav-item'>
					{children}
				</a>
			);

		default:
			return;
	}
};

export default Link;
