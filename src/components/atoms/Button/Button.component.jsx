import React from 'react';
import sendIcon from '../../../assets/sent.svg';
import './Button.style.scss';

const Button = ({ varient, children }) => {
	return (
		<button className={`btn-${varient}`}>
			{children}
			<img className='btn-icon' src={sendIcon} alt='send icon' />
		</button>
	);
};

export default Button;
