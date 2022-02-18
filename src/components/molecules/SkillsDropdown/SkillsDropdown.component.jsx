import React from 'react';
import './SkillsDropdown.style.scss';

import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../atoms/Spacer/Spacer.component';
import classNames from 'classnames';

const SkillsDropdown = ({ skills = [], isOpen = false }) => {
	return (
		<Spacer top='md'>
			<div
				className={classNames('skills-dropdown', {
					'skills-active': isOpen,
				})}
			>
				{skills.map(({ title, iconSrc }) => (
					<Spacer key={title} btm='md' left='lg' right='lg'>
						<div className='skill-container'>
							<Typography varient='skill-text'>{title}</Typography>
							<img className='skill-icon' src={iconSrc} alt={title} />
						</div>
					</Spacer>
				))}
			</div>
		</Spacer>
	);
};

export default SkillsDropdown;
