import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type CardProductProps = {
  image: StaticImageData | string;
  title: string;
  subtitle: string;
  productUrl: string;
  buttonLabel?: string;
};

const CardProduct = ({
  image,
  title,
  subtitle,
  productUrl,
  buttonLabel,
}: CardProductProps) => {
  return (
    <div className="w-full h-[40.8rem] lg:h-[62rem] relative overflow-hidden rounded-[18px] border-[.2rem] border-white/12">
      <div className="bg-black/40 absolute inset-0 z-[2]" />

      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        className="w-full h-full absolute z-[1] object-cover"
        priority
      />

      <div className="flex justify-center items-center gap-[12px] absolute z-[3] inset-0 w-full text-[#F5F5F7] px-[24px] pb-[24px]">
        <div className="flex flex-col items-center gap-[2.4rem] text-[3.2rem]">
          <div className="flex flex-col gap-[.8rem] justify-center items-center text-center">
            <span className="text-[4rem] font-bold lg:text-[6.4rem]">
              {title}
            </span>
            <span className="text-[1.6rem] lg:text-[2.4rem]">{subtitle}</span>
          </div>

          <Link
            href={productUrl}
            target="_blank"
            className="px-[2.2rem] py-[1.2rem] text-[1.7rem] text-white bg-primary-blue rounded-full cursor-pointer"
          >
            {buttonLabel}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
