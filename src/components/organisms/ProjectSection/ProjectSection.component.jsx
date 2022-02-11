import React from 'react';
import './ProjectSection.style.scss';

import portfolio1 from '../../../assets/portfolio1.jpg';

import Typography from '../../atoms/Typography/Typography.component';
import Carousel from '../../molecules/Carousel/Carousel.component';

const ProjectSection = () => {
	const projects = [
		{
			title: 'Online',
			description:
				'Website adaptable to all devices, with ui components and animated interactions.',
			imgSrc: portfolio1,
			imgAlt: 'portfolio name',
			siteUrl: 'dummy url',
			codeUrl: 'dummy url',
		},
		{
			title: 'Online',
			description:
				'Website adaptable to all devices, with ui components and animated interactions.',
			imgSrc: portfolio1,
			imgAlt: 'portfolio name',
			siteUrl: 'dummy url',
			codeUrl: 'dummy url',
		},
		{
			title: 'Online',
			description:
				'Website adaptable to all devices, with ui components and animated interactions.',
			imgSrc: portfolio1,
			imgAlt: 'portfolio name',
			siteUrl: 'dummy url',
			codeUrl: 'dummy url',
		},
	];

	return (
		<section className='projects-section'>
			<Typography varient='title'>Projects</Typography>
			<Typography varient='subtitle'>My recent work</Typography>
			<Carousel projects={projects} />
		</section>
	);
};

export default ProjectSection;
