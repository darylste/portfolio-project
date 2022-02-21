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
						<a href='#home'>
							<div className='left'>
								<Typography varient='footer-title'>Daryl</Typography>
								<Spacer btm='xs' />
								<Typography varient='footer-subtitle'>
									Full Stack Developer
								</Typography>
							</div>
						</a>
						<div className='footer-nav'>
							<ul className='nav-list'>
								<a href='#about' className='footer-nav-item'>
									<li className='footer-nav-item'>About</li>
								</a>
								<a href='#skills' className='footer-nav-item'>
									<li className='footer-nav-item'>Skills</li>
								</a>
								<a href='#projects' className='footer-nav-item'>
									<li className='footer-nav-item'>Projects</li>
								</a>
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
