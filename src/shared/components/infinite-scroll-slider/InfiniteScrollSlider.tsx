'use client';

import Image, { StaticImageData } from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

interface InfiniteScrollSliderProps {
  imageList: StaticImageData[] | string[];
  reverseDirection?: boolean;
}

const InfiniteScrollSlider = ({
  imageList,
  reverseDirection = false,
}: InfiniteScrollSliderProps) => {
  return (
    <Swiper
      modules={[Autoplay, FreeMode]}
      slidesPerView="auto"
      spaceBetween={20}
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reverseDirection,
      }}
      speed={5000}
      allowTouchMove={false}
      className="!overflow-visible"
    >
      {[...imageList, ...imageList].map((src, index) => (
        <SwiperSlide
          key={index}
          className="!w-fit overflow-hidden rounded-[8px] mx-[20px]"
        >
          <div className="w-[53rem] h-[39rem]">
            <Image
              src={src || '/placeholder.svg'}
              alt={`Gallery image ${index + 1}`}
              fill
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InfiniteScrollSlider;
