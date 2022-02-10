import React from 'react';
import './AboutSection.style.scss';

import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import AboutContent from '../../molecules/AboutContent/AboutContent';

const AboutSection = () => {
	return (
		<React.Fragment>
			<Spacer top='xxl' btm='xxl' />
			<div className='about-section'>
				<Typography varient='title'>About Me</Typography>
				<Typography varient='subtitle'>My introduction</Typography>
				<Spacer top='lg' />
				<AboutContent />
			</div>
		</React.Fragment>
	);
};

export default AboutSection;
