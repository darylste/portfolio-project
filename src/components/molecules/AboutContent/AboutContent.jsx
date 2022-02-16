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
					I'm Daryl, a HND Web Development Student at City of Glasgow College. I
					love creating modern websites that not only look great but bring joy
					to those who use them.
				</Typography>
				<Spacer btm='sm' />
				<Typography varient='body'>
					I'm currently developing a blogging website, using React on the
					front-end with Express.js on the back-end.
				</Typography>
				<Spacer top='md' btm='md'>
					<div className='stats-container'>
						<Stat time='1' activity='Years experience' />
						<Stat time='4' activity='Projects completed' />
						<Stat time='0' activity='Companies worked' />
					</div>
				</Spacer>
				<Button varient='primary' icon={downloadIcon} href={CV}>
					Download CV
				</Button>
			</div>
		</Grid>
	);
};

export default AboutContent;
