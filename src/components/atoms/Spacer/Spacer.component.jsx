import React from 'react';
import classNames from 'classnames';

import './Spacer.style.scss';

const Spacer = ({ top, right, btm, left, children, className }) => {
	return (
		<div
			className={classNames(
				{
					'top-sm': top === 'sm',
					'right-sm': right === 'sm',
					'btm-sm': btm === 'sm',
					'left-sm': left === 'sm',

					'top-md': top === 'md',
					'right-md': right === 'md',
					'btm-md': btm === 'md',
					'left-md': left === 'md',

					'top-lg': top === 'lg',
					'right-lg': right === 'lg',
					'btm-lg': btm === 'lg',
					'left-lg': left === 'lg',

					'top-xxl': top === 'xxl',
					'right-xxl': right === 'xxl',
					'btm-xxl': btm === 'xxl',
					'left-xxl': left === 'xxl',
				},
				className,
			)}
		>
			{children}
		</div>
	);
};

export default Spacer;
