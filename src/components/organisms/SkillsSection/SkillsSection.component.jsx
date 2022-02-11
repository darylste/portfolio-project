import React from 'react';
import './SkillsSection.style.scss';

import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import SkillsDropdown from '../../molecules/SkillsDropdown/SkillsDropdown.component';
import Grid from '../../atoms/Grid/Grid.component';

const SkillsSection = () => {
	return (
		<React.Fragment>
			<Spacer top='xxl' btm='xxl'>
				<section className='skills-section'>
					<Typography varient='title'>Skills</Typography>
					<Typography varient='subtitle'>My technical level</Typography>
				</section>
				<Spacer top='lg' />
				<Grid>
					<SkillsDropdown
						heading='Frontend Technologies'
						subheading='One year'
					/>
					<SkillsDropdown
						heading='Backend Technologies'
						subheading='One year'
					/>
				</Grid>
			</Spacer>
		</React.Fragment>
	);
};

export default SkillsSection;
