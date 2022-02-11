import classNames from 'classnames';
import React from 'react';
import './Link.style.scss';

const Link = ({ varient, children, active = false }) => {
	switch (varient) {
		case 'logo':
			return (
				<a href='#home' className='header-logo'>
					{children}
				</a>
			);
		case 'nav-item':
			return (
				<a
					href={`#${children.toLowerCase()}`}
					className={classNames({
						'nav-item': true,
						'nav-active': active,
					})}
				>
					{children}
				</a>
			);

		default:
			return;
	}
};

export default Link;
