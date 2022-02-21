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
					modules={[Navigation, Pagination]}
					pagination={{ clickable: true, el: '.pagination' }}
					navigation
					slidesPerView={1}
				>
					{projects.map(
						({
							title,
							description,
							imgSrc,
							imgAlt,
							btnOneText,
							btnOneUrl,
							btnTwoText,
							btnTwoUrl,
						}) => (
							<SwiperSlide key={title}>
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
											<div className='carousel-text'>
												<Typography varient='heading'>{title}</Typography>
												<Spacer btm='sm' />
												<Typography varient='body'>{description}</Typography>
												<Spacer top='sm' />
												<div className='btn-group'>
													<Button
														varient='primary'
														icon={arrowIcon}
														iconClassName='icon-white icon-rotate-90'
														href={btnOneUrl}
													>
														{btnOneText}
													</Button>
													<Spacer left='sm' />
													<Button
														varient='primary'
														icon={arrowIcon}
														iconClassName='icon-white icon-rotate-90'
														href={btnTwoUrl}
														isCentered={false}
													>
														{btnTwoText}
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
