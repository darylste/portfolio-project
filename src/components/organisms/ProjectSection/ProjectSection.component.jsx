import React, { useEffect, useState } from 'react';
import './ProjectSection.style.scss';

import Typography from '../../atoms/Typography/Typography.component';
import Carousel from '../../molecules/Carousel/Carousel.component';
import { client } from '../../../lib/sanityClient';

const ProjectSection = () => {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		client
			.fetch(
				'*[_type == "project"]{name, "imgUrl": image.asset->url, description, button_one_text, button_one_link, button_two_text, button_two_link,}',
			)
			.then((data) => setProjects(data))
			.catch(console.error);
	}, []);
	return (
		<section className='projects-section' id='projects'>
			<Typography varient='title'>Projects</Typography>
			<Typography varient='subtitle'>My recent work</Typography>
			<Carousel projects={projects} />
		</section>
	);
};

export default ProjectSection;
