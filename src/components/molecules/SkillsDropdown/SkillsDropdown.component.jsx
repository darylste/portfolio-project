import React from 'react';
import './SkillsDropdown.style.scss';

import skillsIcon from '../../../assets/brackets.svg';
import expandIcon from '../../../assets/expand-more.svg';

import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../atoms/Spacer/Spacer.component';

const SkillsDropdown = ({ heading, subheading }) => {
	return (
		<div className='SkillsDropdown'>
			<div className='skills-header'>
				<img src={skillsIcon} alt='curly brackets' className='code-icon' />
				<div>
					<Spacer left='sm' right='sm' className='skills-text'>
						<Typography varient='heading'>{heading}</Typography>
						<Typography varient='stat-text'> {subheading} </Typography>
					</Spacer>
				</div>
				<img className='expand-icon' src={expandIcon} alt='expand arrow' />
			</div>
		</div>
	);
};

export default SkillsDropdown;
