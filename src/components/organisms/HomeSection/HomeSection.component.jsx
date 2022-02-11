import React from 'react';
import Spacer from '../../atoms/Spacer/Spacer.component';
import HeroContent from '../../molecules/HeroContent/HeroContent.component';
import SocialTab from '../../molecules/SocialTab/SocialTab.component';
import './HomeSection.style.scss';

const HomeSection = () => {
	return (
		<React.Fragment>
			<Spacer top='xxl' btm='xxl'>
				<section className='home-section' id='home'>
					<SocialTab />
					<HeroContent />
				</section>
			</Spacer>
		</React.Fragment>
	);
};

export default HomeSection;
