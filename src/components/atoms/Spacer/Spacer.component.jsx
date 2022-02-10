import React from 'react';
import classNames from 'classnames';

import './Spacer.style.scss';

const Spacer = ({ top, right, btm, left, children }) => {
	return (
		<div
			className={classNames({
				'top-sm': top === 'sm',
				'right-sm': right === 'sm',
				'btm-sm': btm === 'sm',
				'left-sm': left === 'sm',

				'top-md': top === 'md',
				'right-md': right === 'md',
				'btm-md': btm === 'md',
				'left-md': left === 'md',

				'top-xxl': top === 'xxl',
				'right-xxl': right === 'xxl',
				'btm-xxl': btm === 'xxl',
				'left-xxl': left === 'xxl',
			})}
		>
			{children}
		</div>
	);
};

export default Spacer;
