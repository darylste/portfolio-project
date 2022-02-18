import React from 'react';
import './AboutContent.scss';

import codeImg from '../../../assets/code.svg';
import downloadIcon from '../../../assets/download.svg';
import CV from '../../../assets/darylCV.pdf';

import Typography from '../../atoms/Typography/Typography.component';
import Stat from '../Stat/Stat.component';
import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Grid from '../../atoms/Grid/Grid.component';

const AboutContent = () => {
	return (
		<Grid cols='2'>
			<div className='about-img-container'>
				<img className='about-img' src={codeImg} alt='phone' />
			</div>
			<div className='about-text'>
				<Typography varient='body'>
					I am a junior developer studying HND Web Development at the City of
					Glasgow College. I love creating new projects and expanding my
					development knowledge.
				</Typography>
				<Spacer btm='sm' />
				<Typography varient='body'>
					I am currently working on a bloging application using a React
					front-end and Express on the back-end.
				</Typography>
				<Spacer top='md' btm='md'>
					<div className='stats-container'>
						<Stat time='1+' activity='Years experience' />
						<Stat time='9+' activity='Projects completed' />
					</div>
				</Spacer>
				<Button varient='primary' icon={downloadIcon} href={CV} isCentered>
					Download CV
				</Button>
			</div>
		</Grid>
	);
};

export default AboutContent;
