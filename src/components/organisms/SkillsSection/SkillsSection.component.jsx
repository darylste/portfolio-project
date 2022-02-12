import React from 'react';
import './SkillsSection.style.scss';

import htmlIcon from '../../../assets/html.svg';
import cssIcon from '../../../assets/css.svg';
import sassIcon from '../../../assets/sass.svg';
import jsIcon from '../../../assets/javascript.svg';
import reactIcon from '../../../assets/react.svg';
import nodeIcon from '../../../assets/nodejs.svg';
import mongoDbIcon from '../../../assets/mongodb.svg';

import Grid from '../../atoms/Grid/Grid.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Typography from '../../atoms/Typography/Typography.component';
import SkillsHeader from '../../molecules/SkillsHeader/SkillsHeader.component';

const SkillsSection = () => {
	const skillsFrontend = [
		{
			title: 'HTML',
			iconSrc: htmlIcon,
		},
		{
			title: 'CSS',
			iconSrc: cssIcon,
		},
		{
			title: 'SASS',
			iconSrc: sassIcon,
		},
		{
			title: 'JavaScript',
			iconSrc: jsIcon,
		},
		{
			title: 'React',
			iconSrc: reactIcon,
		},
	];

	const skillsBackend = [
		{
			title: 'Node Js',
			iconSrc: nodeIcon,
		},
		{
			title: 'MongoDB',
			iconSrc: mongoDbIcon,
		},
	];
	return (
		<React.Fragment>
			<Spacer top='xxl' btm='xxl'>
				<section className='skills-section' id='skills'>
					<Typography varient='title'>Skills</Typography>
					<Typography varient='subtitle'>My technical level</Typography>
					<Spacer top='lg' />
					<Grid cols='2'>
						<SkillsHeader
							heading='Frontend Technologies'
							subheading='One year'
							skills={skillsFrontend}
						/>
						<SkillsHeader
							heading='Backend Technologies'
							subheading='Currently learning'
							skills={skillsBackend}
						/>
					</Grid>
				</section>
			</Spacer>
		</React.Fragment>
	);
};

export default SkillsSection;
