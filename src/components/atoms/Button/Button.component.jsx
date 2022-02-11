import React from 'react';
import './Button.style.scss';

const Button = ({ varient, icon, children, href, isPDF = false }) => {
	if (isPDF) {
		return (
			<a href={href} download className={`btn-${varient}`}>
				{children}
				<img className='btn-icon' src={icon} alt='send icon' />
			</a>
		);
	} else {
		return (
			<a
				href={href}
				rel='noreferrer'
				target='_blank'
				className={`btn-${varient}`}
			>
				{children}
				<img className='btn-icon' src={icon} alt='send icon' />
			</a>
		);
	}
};

export default Button;
