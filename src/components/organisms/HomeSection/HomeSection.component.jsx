import React from 'react';
import HeroContent from '../../molecules/HeroContent/HeroContent.component';
import SocialTab from '../../molecules/SocialTab/SocialTab.component';
import './HomeSection.style.scss';

const HomeSection = () => {
	return (
		<section className='home-section'>
			<SocialTab />
			<HeroContent />
		</section>
	);
};

export default HomeSection;
