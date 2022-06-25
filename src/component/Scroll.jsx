import { useState } from "react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

/** @type { comps } descript: { none } */
export default function Scroll() {
  return <Swiper
    className="w-[70%] bg-red-400"
    spaceBetween={30}
    slidesPerView={3}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide>
      <img src="https://picsum.photos/520/330" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/520/330" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/520/330" />
    </SwiperSlide>
    <SwiperSlide>
      <img src="https://picsum.photos/520/330" />
    </SwiperSlide>
  </Swiper>
}