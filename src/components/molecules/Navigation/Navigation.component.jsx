import React from 'react';
import './Navigation.style.scss';

import Link from '../../atoms/Link/Link.component';

const Navigation = () => {
	return (
		<nav className='show-menu'>
			<ul className='nav-list'>
				<li>
					<Link varient='nav-item' active>
						Home
					</Link>
				</li>
				<li>
					<Link varient='nav-item'>About</Link>
				</li>
				<li>
					<Link varient='nav-item'>Skills</Link>
				</li>
				<li>
					<Link varient='nav-item'>Portfolio</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
