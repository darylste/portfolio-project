import React from 'react';
import './Button.style.scss';

const Button = ({ varient, icon, children }) => {
	return (
		<button className={`btn-${varient}`}>
			{children}
			<img className='btn-icon' src={icon} alt='send icon' />
		</button>
	);
};

export default Button;
