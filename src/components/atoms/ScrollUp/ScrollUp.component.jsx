import React, { useEffect, useState } from 'react';
import './ScrollUp.style.scss';

import arrowIcon from '../../../assets/expand-more.svg';
import classNames from 'classnames';

const ScrollUp = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', (event) => {
			const positionY = window.scrollY;
			const target = 400;

			if (positionY > target) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		});
	}, []);

	return (
		<a
			className={classNames('scroll-up', {
				'scroll-up-active': isVisible,
			})}
			href='#home'
		>
			<img
				className='icon-rotate-180 icon-white'
				src={arrowIcon}
				alt='arrowIcon'
			/>
		</a>
	);
};

export default ScrollUp;
