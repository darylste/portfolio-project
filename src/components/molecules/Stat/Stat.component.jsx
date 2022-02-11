import React from 'react';
import './Stat.style.scss';

import Typography from '../../atoms/Typography/Typography.component';
import Spacer from '../../atoms/Spacer/Spacer.component';

const Stat = ({ time, activity }) => {
	return (
		<Spacer right='sm'>
			<div className='stat-container'>
				<Typography varient='stats'>{time}</Typography>
				<Typography varient='stat-text'>{activity}</Typography>
			</div>
		</Spacer>
	);
};

export default Stat;
