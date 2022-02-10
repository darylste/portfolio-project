import React from 'react';
import Spacer from '../Spacer/Spacer.component';
import './SocialIcon.style.scss';

const SocialIcon = ({ href, icon, isEmail = false }) => {
	if (isEmail) {
		return (
			<Spacer top='sm'>
				<a href={`mailto:${href}`} target='_blank' rel='noreferrer'>
					<img src={icon} alt='svg' className='social-icon' />
				</a>
			</Spacer>
		);
	} else {
		return (
			<Spacer top='sm'>
				<a href={href} target='_blank' rel='noreferrer'>
					<img src={icon} alt='svg' className='social-icon' />
				</a>
			</Spacer>
		);
	}
};

export default SocialIcon;
