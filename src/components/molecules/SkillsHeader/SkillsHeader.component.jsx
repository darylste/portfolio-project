import React, { useState } from 'react';
import './SkillsHeader.style.scss';

import skillsIcon from '../../../assets/brackets.svg';
import expandIcon from '../../../assets/expand-more.svg';

import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import SkillsDropdown from '../SkillsDropdown/SkillsDropdown.component';
import classNames from 'classnames';

const SkillsHeader = ({ heading, subheading, skills }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div>
			<div className='skills-header' onClick={() => setIsOpen(!isOpen)}>
				<img src={skillsIcon} alt='curly brackets' className='code-icon' />
				<Spacer left='sm' right='sm' className='skills-text'>
					<Typography varient='heading'>{heading}</Typography>
					<Typography varient='stat-text'> {subheading} </Typography>
				</Spacer>
				<img
					className={classNames('expand-icon', {
						'expand-less': isOpen,
					})}
					src={expandIcon}
					alt='expand arrow'
				/>
			</div>
			<SkillsDropdown skills={skills} isOpen={isOpen} />
		</div>
	);
};

export default SkillsHeader;
