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
					breakpoints={{
						// when window width is >= 640px
						640: {
							width: 640,
							slidesPerView: 1,
						},
						// when window width is >= 768px
						768: {
							width: 768,
							slidesPerView: 2,
						},
					}}
					pagination={{ clickable: true, el: '.pagination' }}
					modules={[Navigation, Pagination]}
					navigation
				>
					{projects.map(
						({ title, description, imgSrc, imgAlt, siteUrl, codeUrl }) => (
							<SwiperSlide>
								<Spacer left='xxl' right='xxl'>
									<div className='carousel-slide'>
										<Grid cols='2'>
											<div className='carousel-img-container'>
												<img
													className='carousel-img'
													src={imgSrc}
													alt={imgAlt}
												/>
											</div>
											<div className='text'>
												<Typography varient='heading'>{title}</Typography>
												<Spacer btm='sm' />
												<Typography varient='body'>{description}</Typography>
												<Spacer top='sm' />
												<div className='btn-group'>
													<Button
														varient='primary'
														icon={arrowIcon}
														iconClassName='icon-white icon-rotate-90'
														href={siteUrl}
													>
														Website
													</Button>
													<Spacer left='sm' />
													<Button
														varient='primary'
														icon={arrowIcon}
														iconClassName='icon-white icon-rotate-90'
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
