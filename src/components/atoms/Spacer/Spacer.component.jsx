import React from 'react';
import classNames from 'classnames';

import './Spacer.style.scss';

const Spacer = ({
	top = 'md',
	right = 'md',
	btm = 'md',
	left = 'md',
	children,
}) => {
	return (
		<div
			className={classNames({
				'top-sm': top === 'sm',
				'right-sm': right === 'sm',
				'btm-sm': btm === 'sm',
				'left-sm': left === 'sm',
			})}
		>
			{children}
		</div>
	);
};

export default Spacer;
