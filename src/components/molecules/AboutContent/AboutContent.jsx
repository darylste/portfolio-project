import React from 'react';
import './AboutContent.scss';

import codeImg from '../../../assets/code.svg';
import downloadIcon from '../../../assets/download.svg';

import Typography from '../../atoms/Typography/Typography.component';
import Stat from '../Stat/Stat.component';
import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spacer/Spacer.component';

const AboutContent = () => {
	return (
		<div className='about-content'>
			<div className='about-img-container'>
				<img className='about-img' src={codeImg} alt='phone' />
			</div>
			<div className='about-text'>
				<Typography varient='body'>
					Web developer, with extensive knowledge and years of experience,
					working in web technologies and Ui / Ux design, delivering quality
					work.
				</Typography>
				<Spacer top='md' btm='md'>
					<div className='stats-container'>
						<Stat time='08+' activity='Years experience' />
						<Stat time='20+' activity='Projects completed' />
						<Stat time='05+' activity='Companies worked' />
					</div>
				</Spacer>
				<Button varient={'primary'} icon={downloadIcon}>
					Download CV
				</Button>
			</div>
		</div>
	);
};

export default AboutContent;
