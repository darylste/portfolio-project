import React from 'react';
import './Carousel.style.scss';

import arrowIcon from '../../../assets/expand-more.svg';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Spacer from '../../atoms/Spacer/Spacer.component';
import Grid from '../../atoms/Grid/Grid.component';
import Typography from '../../atoms/Typography/Typography.component';
import Button from '../../atoms/Button/Button.component';

const Carousel = ({ projects = 0 }) => {
	return (
		<div className='carousel'>
			<Spacer top='lg' btm='xxl'>
				<Swiper
					pagination={{ clickable: true, el: '.pagination' }}
					modules={[Navigation, Pagination]}
					navigation
				>
					{projects.map(
						({ title, description, imgSrc, imgAlt, siteUrl, codeUrl }) => (
							<SwiperSlide>
								<Spacer left='xxl' right='xxl'>
									<div className='carousel-slide'>
										<Grid>
											<img className='carousel-img' src={imgSrc} alt={imgAlt} />
											<div className='text'>
												<Typography varient='heading'>{title}</Typography>
												<Spacer btm='sm' />
												<Typography varient='body'>{description}</Typography>
												<Spacer top='sm' />
												<div className='btn-group'>
													<Button
														varient='primary'
														icon={arrowIcon}
														iconClassName='icon-white'
														href={siteUrl}
													>
														Website
													</Button>
													<Spacer left='sm' />
													<Button
														varient='primary'
														icon={arrowIcon}
														iconClassName='icon-white'
														href={codeUrl}
													>
														Code
													</Button>
												</div>
											</div>
										</Grid>
									</div>
								</Spacer>
							</SwiperSlide>
						),
					)}
				</Swiper>
				<div className='pagination'></div>
			</Spacer>
		</div>
	);
};

export default Carousel;
