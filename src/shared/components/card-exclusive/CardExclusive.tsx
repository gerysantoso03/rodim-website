import Image, { StaticImageData } from 'next/image';

type CardExclusiveProps = {
  image: StaticImageData | string;
  icon: StaticImageData | string;
  title: string;
  subtitle: string;
};

const CardExclusive = ({
  image,
  icon,
  title,
  subtitle,
}: CardExclusiveProps) => {
  return (
    <div className="w-full h-[40.8rem] lg:h-[48.8rem] xl:h-[58rem] relative overflow-hidden rounded-[18px] border-[.2rem] border-white/12">
      <Image
        src={image}
        alt={title}
        width={0}
        height={0}
        className="w-full h-full absolute object-cover"
        priority
      />

      <div className="flex flex-col gap-[.5rem] absolute bottom-0 left-0 right-0 px-[2.5rem] pb-[2.5rem]">
        <div className="flex gap-[.8rem] items-center">
          <Image src={icon} alt={title} width={0} height={0} />
          <span className="text-[1.6rem] font-[700] lg:text-[2.4rem]">
            {title}
          </span>
        </div>

        <span className="text-[4rem] font-[700] lg:text-[5.6rem]">
          {subtitle}
        </span>
      </div>
    </div>
  );
};

export default CardExclusive;
