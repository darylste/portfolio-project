import React from 'react';
import './Header.style.scss';

import Link from '../../atoms/Link/Link.component';
import Navigation from '../../molecules/Navigation/Navigation.component';

const Header = () => {
	return (
		<header>
			<Link varient={'logo'}>Daryl Stensland</Link>
			<Navigation />
		</header>
	);
};

export default Header;
