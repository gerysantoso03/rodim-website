'use client';

const GalleryPageHeader = () => {
  return (
    <>
      <div className="w-full h-[80px] border-b-2 border-gray-200 flex items-center justify-between">
        <div>
          <h1 className="text-[#09090B] font-semibold text-[24px]/[32px]">
            Gallery Detail
          </h1>
          <p className="text-[14px]/[20px] text-[#71717A] mt-1">
            Manage images in the gallery
          </p>
        </div>
      </div>
    </>
  );
};

export default GalleryPageHeader;
