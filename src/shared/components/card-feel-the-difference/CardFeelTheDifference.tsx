import Image, { StaticImageData } from 'next/image';
import ArrowIcon from '../../../assets/icons/arrow-right.svg';
import { useState } from 'react';

type CardFeelTheDifferenceProps = {
  image: StaticImageData | string;
  icon: StaticImageData | string;
  title: string;
  subtitle: string;
  detail: string;
  discoverLabel?: string;
  closeLabel?: string;
  isWide: boolean;
};

const CardFeelTheDifference = ({
  image,
  icon,
  title,
  subtitle,
  detail,
  isWide,
  discoverLabel,
  closeLabel,
}: CardFeelTheDifferenceProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`relative w-full min-h-[40.8rem] lg:min-h-[48.8rem] xl:min-h-[58rem] overflow-hidden rounded-[18px] bg-white/12 px-[2rem] py-[4rem] flex flex-col gap-[4rem] lg:p-[4rem] ${isWide && 'xl:p-[6.4rem] lg:flex-row lg:items-center lg:gap-[6.4rem]'}`}
    >
      <div
        className={`px-[2rem] py-[4rem] absolute inset-0 bg-[#1F1F1F] z-10 ${isWide && 'items-center'} ${isOpen ? 'flex' : 'hidden'}`}
      >
        <div className="flex flex-col gap-[2.6rem]">
          <div
            className="flex gap-[.8rem] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={ArrowIcon}
              alt=""
              width={0}
              height={0}
              className="rotate-180"
            />

            <span>{closeLabel}</span>
          </div>

          <div className="flex gap-[1.2rem] lg:gap-[2rem] lg:flex-[1] items-start">
            <div className="relative w-[4.6rem] h-[4.6rem] lg:w-[6rem] lg:h-[6rem] aspect-square">
              <Image
                src={icon}
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col items-start gap-[2.4rem]">
              <div className="flex flex-col gap-[.4rem]">
                <span className="text-[4rem] font-[700] lg:text-[4.4rem]">
                  {title}
                </span>
                <p className="text-[1.8rem] font-[400]">{detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[1.2rem] lg:gap-[2rem] lg:flex-[1] items-start">
        <div className="relative w-[4.6rem] h-[4.6rem] lg:w-[6rem] lg:h-[6rem] aspect-square">
          <Image
            src={icon}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-start gap-[2.4rem]">
          <div className="flex flex-col gap-[.4rem]">
            <span className="text-[4rem] font-[700] lg:text-[4.4rem]">
              {title}
            </span>
            <p className="text-[1.8rem] font-[400]">{subtitle}</p>
          </div>

          <div
            className="px-[2.2rem] py-[1.2rem] text-[1.7rem] text-white bg-primary-blue rounded-full cursor-pointer flex gap-[.8rem]"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <span>{discoverLabel}</span>

            <Image src={ArrowIcon} alt="" width={0} height={0} />
          </div>
        </div>
      </div>

      <div
        className={`w-full h-[28rem] ${!isWide ? 'lg:h-[29rem]' : 'lg:h-[52rem] lg:max-w-[42.4rem] xl:h-[47.2rem] xl:max-w-[60.8rem]'} relative rounded-[1.8rem] overflow-hidden border-[.2rem] border-white/25`}
      >
        <Image
          src={image}
          alt=""
          width={1000}
          height={1000}
          className="w-full h-full inset-0 absolute object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default CardFeelTheDifference;
