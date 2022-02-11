import React from 'react';
import './Header.style.scss';

import Spacer from '../../atoms/Spacer/Spacer.component';
import Link from '../../atoms/Link/Link.component';
import Navigation from '../../molecules/Navigation/Navigation.component';

const Header = () => {
	return (
		<div className='header-container'>
			<Spacer top='md' btm='lg'>
				<header>
					<Link varient={'logo'}>Daryl Stensland</Link>
					<Navigation />
				</header>
			</Spacer>
		</div>
	);
};

export default Header;
