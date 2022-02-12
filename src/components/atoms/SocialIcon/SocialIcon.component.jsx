import classNames from 'classnames';
import React from 'react';
import Spacer from '../Spacer/Spacer.component';
import './SocialIcon.style.scss';

const SocialIcon = ({ href, icon, isEmail = false, color }) => {
	if (isEmail) {
		return (
			<Spacer btm='sm' right='sm'>
				<a href={`mailto:${href}`} target='_blank' rel='noreferrer'>
					<img
						src={icon}
						alt='svg'
						className={classNames('social-icon', {
							'icon-white': color === 'white',
						})}
					/>
				</a>
			</Spacer>
		);
	} else {
		return (
			<Spacer btm='sm' right='sm'>
				<a href={href} target='_blank' rel='noreferrer'>
					<img
						src={icon}
						alt='svg'
						className={classNames('social-icon', {
							'icon-white': color === 'white',
						})}
					/>
				</a>
			</Spacer>
		);
	}
};

export default SocialIcon;
