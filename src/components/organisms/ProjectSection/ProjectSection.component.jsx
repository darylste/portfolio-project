import React from 'react';
import './ProjectSection.style.scss';

import natoursImg from '../../../assets/natours.svg';
import trilloImg from '../../../assets/trello.svg';
import blogrImg from '../../../assets/blogr.svg';

import Typography from '../../atoms/Typography/Typography.component';
import Carousel from '../../molecules/Carousel/Carousel.component';

const ProjectSection = () => {
	const projects = [
		{
			title: 'Blogr',
			description:
				'Using a React front-end and Express.js on the back-end, Blogr is a complete blogging platform. Users will be able to veiw others post as well as sign in and create, edit and delete their own.',
			imgSrc: blogrImg,
			imgAlt: 'Face Recognition Website',
			btnOneText: 'Frontend',
			btnOneUrl: 'https://github.com/darylste/Blogr',
			btnTwoText: 'Backend',
			btnTwoUrl: 'https://github.com/darylste/blogr-server',
		},
		{
			title: 'Trillo',
			description:
				'A static hotel booking page for an all-in-one hotel, flights and accomidation website. Trello utilises CSS grid to create a box style webpage.',
			imgSrc: trilloImg,
			imgAlt: 'trillo',
			btnOneText: 'Website',
			btnOneUrl: 'https://darylste.github.io/trillo/',
			btnTwoText: 'Code',
			btnTwoUrl: 'https://github.com/darylste/trillo',
		},
		{
			title: 'Natours',
			description:
				'Natours is an online marketplace for exciting outdoor tours. This portfolio project features a sleek design and variety of modern CSS technologies.',
			imgSrc: natoursImg,
			imgAlt: 'Natours',
			btnOneText: 'Website',
			btnOneUrl: 'https://darylste.github.io/natours/',
			btnTwoText: 'Code',
			btnTwoUrl: 'https://github.com/darylste/natours/',
		},
	];

	return (
		<section className='projects-section' id='projects'>
			<Typography varient='title'>Projects</Typography>
			<Typography varient='subtitle'>My recent work</Typography>
			<Carousel projects={projects} />
		</section>
	);
};

export default ProjectSection;
