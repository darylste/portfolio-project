import React from 'react';

import Spacer from '../../atoms/Spacer/Spacer.component';
import HeroContent from '../../molecules/HeroContent/HeroContent.component';
import './HomeSection.style.scss';

const HomeSection = () => {
	return (
		<React.Fragment>
			<Spacer top='xxl' btm='xxl'>
				<section id='home'>
					<HeroContent />
				</section>
			</Spacer>
		</React.Fragment>
	);
};

export default HomeSection;
