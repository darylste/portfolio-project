import classNames from 'classnames';
import React from 'react';
import './Grid.style.scss';

const Grid = ({ cols, children }) => {
	return <div className={classNames('grid', `grid-${cols}`)}>{children}</div>;
};

export default Grid;
