import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

interface GalleryModalProps {
  isOpen?: boolean;
  closeModal?: () => void;
  selectedImageIndex?: number;
  imageList: string[];
}

const GalleryModal = ({
  isOpen,
  closeModal,
  selectedImageIndex,
  imageList,
}: GalleryModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="w-screen h-screen fixed inset-0 z-[1000] flex justify-center items-center">
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.1)] backdrop-blur-lg cursor-pointer"
        onClick={closeModal}
      />
      <div className="relative z-10 w-full h-full flex justify-center items-center overflow-hidden max-h-[90vh] p-20 sm:max-w-[800px]">
        <button
          onClick={closeModal}
          className="cursor-pointer absolute top-4 right-[30px] z-20 p-2 text-white transition-all duration-200 hover:text-gray-500"
        >
          <X size={24} />
        </button>

        <div className="relative w-full h-full flex items-center justify-center overflow-hidden px-6 sm:px-20 max-w-[350px] sm:max-w-[600px] lg:max-w-[750px]">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            loop={true}
            initialSlide={selectedImageIndex || 0}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              320: {
                spaceBetween: 100,
              },
              640: {
                spaceBetween: 80,
              },
              1024: {
                spaceBetween: 80,
              },
              1280: {
                spaceBetween: 100,
              },
            }}
            className="w-full h-full !flex justify-center !items-center"
          >
            {[...imageList].map((src, index) => (
              <SwiperSlide
                key={index}
                className="!flex items-center justify-center"
              >
                <div className="relative w-fit mx-auto">
                  <img
                    src={src || '/placeholder.svg'}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button className="swiper-button-prev-custom cursor-pointer absolute left-[30px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full sm:bg-[#2F2E2E] sm:hover:bg-[#404040] text-white transition-colors duration-200">
          <ChevronLeft size={24} />
        </button>
        <button className="swiper-button-next-custom cursor-pointer absolute right-[30px] top-1/2 -translate-y-1/2 z-20 p-3 rounded-full sm:bg-[#2F2E2E] sm:hover:bg-[#404040] text-white transition-colors duration-200">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default GalleryModal;
