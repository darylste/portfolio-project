import React from 'react';
import Grid from '../../atoms/Grid/Grid.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import Typography from '../../atoms/Typography/Typography.component';
import SocialTab from '../../molecules/SocialTab/SocialTab.component';
import './Footer.style.scss';

const Footer = () => {
	return (
		<footer>
			<Spacer top='md' btm='xxl'>
				<div className='footer-content'>
					<Grid cols='3'>
						<div className='left'>
							<Typography varient='footer-title'>Daryl</Typography>
							<Spacer btm='xs' />
							<Typography varient='footer-subtitle'>
								Full Stack Developer
							</Typography>
						</div>
						<div className='footer-nav'>
							<ul className='nav-list'>
								<li className='nav-item'>About</li>
								<li className='nav-item'>Skills</li>
								<li className='nav-item'>Portfolio</li>
							</ul>
						</div>
						<SocialTab color='white' direction='row' />
					</Grid>
				</div>
			</Spacer>
		</footer>
	);
};

export default Footer;
