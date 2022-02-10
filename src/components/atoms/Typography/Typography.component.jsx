import React from 'react';
import './Typography.style.scss';

const Typography = ({ varient, children }) => {
	switch (varient) {
		case 'hero-title':
			return <h1 className={varient}>{children}</h1>;
		case 'hero-subtitle':
			return <p className={varient}>{children}</p>;
		case 'body':
			return <p className='body'>{children}</p>;
		default:
			return null;
	}
};

export default Typography;
