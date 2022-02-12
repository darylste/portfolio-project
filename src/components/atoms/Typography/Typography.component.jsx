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
		case 'heading':
			return <h3 className={varient}>{children}</h3>;
		case 'stats':
			return <p className={varient}>{children}</p>;
		case 'stat-text':
			return <p className={varient}>{children}</p>;
		case 'skill-text':
			return <p className={varient}>{children}</p>;
		case 'hero-title':
			return <h1 className={varient}>{children}</h1>;
		case 'hero-subtitle':
			return <p className={varient}>{children}</p>;
		case 'footer-title':
			return <h2 className={varient}>{children}</h2>;
		case 'footer-subtitle':
			return <h3 className={varient}>{children}</h3>;
		default:
			return null;
	}
};

export default Typography;
