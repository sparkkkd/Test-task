import styles from './GoodSlider.module.sass'

import sliderMain from '../../images/boots-main.png'

import LeftArrow from '../../images/arrow-left-icon.svg?react'
import RightArrow from '../../images/arrow-right-icon.svg?react'
import { sliderImgs } from './constants'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation, Controller } from 'swiper/modules'
import 'swiper/css'
import { useState } from 'react'

export interface GoodSliderProps {}

export default function GoodSlider({}: GoodSliderProps) {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>(null)

	return (
		<div className={styles.sliderContainer}>
			<Swiper
				spaceBetween={10}
				navigation={true}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[Thumbs]}
				className={styles.slider}
			>
				{sliderImgs.map(({ href, alt }) => (
					<SwiperSlide key={href}>
						<img src={href} alt={alt} />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[Thumbs]}
				className={styles.thumbs}
				navigation={true}
			>
				{sliderImgs.map(({ href, alt }) => (
					<SwiperSlide key={href}>
						<img className={styles.thumbImg} src={href} alt={alt} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
