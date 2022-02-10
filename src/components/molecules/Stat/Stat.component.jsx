import React from 'react';
import './Stat.style.scss';

import Typography from '../../atoms/Typography/Typography.component';

const Stat = ({ time, activity }) => {
	return (
		<div className='stat-container'>
			<Typography varient='stats'>{time}</Typography>
			<Typography varient='stat-text'>{activity}</Typography>
		</div>
	);
};

export default Stat;
