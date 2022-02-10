import React from 'react';
import './HeroContent.style.scss';

import heroImg from '../../../assets/programming.svg';
import sendIcon from '../../../assets/sent.svg';

import Typography from '../../atoms/Typography/Typography.component';
import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spacer/Spacer.component';

const HeroContent = () => {
	return (
		<Spacer top='xxl'>
			<div className='hero-content'>
				<div className='hero-text'>
					<Typography varient='hero-title'>Hi, I'm Daryl</Typography>
					<Typography varient='hero-subtitle'>Web Developer</Typography>
					<Spacer top='sm' btm='md'>
						<Typography varient='body'>
							Junior Developer currently working with React, studying at City of
							Glasgow College.
						</Typography>
					</Spacer>
					<Button varient='primary' icon={sendIcon}>
						Contact me
					</Button>
				</div>
				<img className='hero-img' src={heroImg} alt='programmer' />
			</div>
		</Spacer>
	);
};

export default HeroContent;
