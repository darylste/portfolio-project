import React from 'react';
import './Button.style.scss';

import classNames from 'classnames';

const Button = ({
	varient,
	icon,
	children,
	href,
	isPDF = false,
	iconClassName,
	isCentered = false,
}) => {
	if (isPDF) {
		return (
			<a
				href={href}
				download
				className={classNames(`btn-${varient}`, {
					'btn-centered': isCentered,
				})}
			>
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
				className={classNames(`btn-${varient}`, {
					'btn-centered': isCentered,
				})}
			>
				{children}
				<img
					className={classNames('btn-icon', iconClassName)}
					src={icon}
					alt='send icon'
				/>
			</a>
		);
	}
};

export default Button;
