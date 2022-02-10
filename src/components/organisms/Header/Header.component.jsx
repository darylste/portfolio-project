import React from 'react';
import './Header.style.scss';

import Spacer from '../../atoms/Spacer/Spacer.component';
import Link from '../../atoms/Link/Link.component';
import Navigation from '../../molecules/Navigation/Navigation.component';

const Header = () => {
	return (
		<React.Fragment>
			<Spacer top='md' btm='md'>
				<header>
					<Link varient={'logo'}>Daryl Stensland</Link>
					<Navigation />
				</header>
			</Spacer>
		</React.Fragment>
	);
};

export default Header;
