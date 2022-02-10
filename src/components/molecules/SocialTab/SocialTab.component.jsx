import React from 'react';
import './SocialTab.style.scss';

import githubIcon from '../../../assets/github.svg';
import emailIcon from '../../../assets/email.svg';
import linkedinIcon from '../../../assets/linkedin.svg';

import SocialIcon from '../../atoms/SocialIcon/SocialIcon.component';

const SocialTab = () => {
	return (
		<div className='social-tab'>
			<SocialIcon href='https://github.com/darylste' icon={githubIcon} />
			<SocialIcon href='dstensland5@gmail.com' icon={emailIcon} isEmail />
			<SocialIcon
				href='https://www.linkedin.com/in/daryl-stensland/'
				icon={linkedinIcon}
			/>
		</div>
	);
};

export default SocialTab;
