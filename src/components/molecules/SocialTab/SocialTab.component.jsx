import React from 'react';
import './SocialTab.style.scss';

import githubIcon from '../../../assets/github.svg';
import emailIcon from '../../../assets/email.svg';
import linkedinIcon from '../../../assets/linkedin.svg';

import SocialIcon from '../../atoms/SocialIcon/SocialIcon.component';
import classNames from 'classnames';

const SocialTab = ({ color = 'purple', direction = 'column' }) => {
	return (
		<div
			className={classNames('social-tab', {
				'tab-row': direction === 'row',
			})}
		>
			<SocialIcon
				href='https://github.com/darylste'
				icon={githubIcon}
				color={color}
				direction={direction}
			/>
			<SocialIcon
				href='dstensland5@gmail.com'
				icon={emailIcon}
				isEmail
				color={color}
				direction={direction}
			/>
			<SocialIcon
				href='https://www.linkedin.com/in/daryl-stensland/'
				icon={linkedinIcon}
				color={color}
				direction={direction}
			/>
		</div>
	);
};

export default SocialTab;
