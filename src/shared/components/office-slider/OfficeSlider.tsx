import { InfiniteScrollSlider } from '../infinite-scroll-slider';
import Top1 from '../../../assets/images/gallery/slider/top-1.jpg';
import Top2 from '../../../assets/images/gallery/slider/top-2.jpg';
import Top3 from '../../../assets/images/gallery/slider/top-3.jpg';
import Top4 from '../../../assets/images/gallery/slider/top-4.jpg';
import Top5 from '../../../assets/images/gallery/slider/top-5.jpg';

import Bottom1 from '../../../assets/images/gallery/slider/bottom-1.jpg';
import Bottom2 from '../../../assets/images/gallery/slider/bottom-2.jpg';
import Bottom3 from '../../../assets/images/gallery/slider/bottom-3.jpg';
import Bottom4 from '../../../assets/images/gallery/slider/bottom-4.jpg';
import Bottom5 from '../../../assets/images/gallery/slider/bottom-5.jpg';

const imageTopList = [Top1, Top2, Top3, Top4, Top5];
const imageBottomList = [Bottom1, Bottom2, Bottom3, Bottom4, Bottom5];

const OfficeSlider = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#1F1F1F] rounded-[18px]">
      <div className="w-full px-[2.6rem] pt-[12rem] pb-[11rem]">
        <h3 className="text-center text-white font-bold tracking-[-0.28px] text-[4rem] lg:text-[5.6rem] leading-[110%]">
          Kunjungi Kami di <br /> RODIM Experience Center
        </h3>
      </div>

      <div className="w-full min-h-[800px] pb-[2rem]">
        <div className="w-full space-y-[2rem] overflow-hidden">
          <InfiniteScrollSlider imageList={imageTopList} reverseDirection />
          <InfiniteScrollSlider imageList={imageBottomList} />
        </div>
      </div>
    </section>
  );
};

export default OfficeSlider;
