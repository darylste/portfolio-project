import React from 'react';
import './Typography.style.scss';

const Typography = ({ varient, children }) => {
	switch (varient) {
		case 'body':
			return <p className={varient}>{children}</p>;
		case 'title':
			return <h2 className={varient}>{children}</h2>;
		case 'subtitle':
			return <h2 className={varient}>{children}</h2>;
		case 'stats':
			return <p className={varient}>{children}</p>;
		case 'stat-text':
			return <p className={varient}>{children}</p>;
		case 'hero-title':
			return <h1 className={varient}>{children}</h1>;
		case 'hero-subtitle':
			return <p className={varient}>{children}</p>;
		default:
			return null;
	}
};

export default Typography;
