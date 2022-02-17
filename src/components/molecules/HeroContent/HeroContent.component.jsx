import React from 'react';
import './HeroContent.style.scss';

import heroImg from '../../../assets/programming.svg';
import sendIcon from '../../../assets/sent.svg';

import Typography from '../../atoms/Typography/Typography.component';
import Button from '../../atoms/Button/Button.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Grid from '../../atoms/Grid/Grid.component';
import SocialTab from '../../molecules/SocialTab/SocialTab.component';

const HeroContent = () => {
	return (
		<div className='hero-content'>
			<Grid cols='2'>
				<div className='hero-main'>
					<Spacer right='md' className='hero-left'>
						<SocialTab />
					</Spacer>
					<div className='hero-text'>
						<Typography varient='hero-title'>Hi, I'm Daryl</Typography>
						<Typography varient='hero-subtitle'>Web Developer</Typography>
						<Spacer top='sm' btm='md'>
							<Typography varient='body'>
								Junior Developer working with React, studying at City of Glasgow
								College.
							</Typography>
						</Spacer>
						<Button
							varient='primary'
							icon={sendIcon}
							href='mailto:dstensland5@gmail.com'
						>
							Contact me
						</Button>
					</div>
				</div>
				<img className='hero-img' src={heroImg} alt='programmer' />
			</Grid>
		</div>
	);
};

export default HeroContent;
