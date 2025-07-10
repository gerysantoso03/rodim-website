'use client';

import React from 'react';

import TableSpecification from '@/shared/components/table-specification/TableSpecification';

interface ProductSpecificationPageUIProps {
  data: any;
}

const ProductSpecificationPageUI = ({
  data,
}: ProductSpecificationPageUIProps) => {
  const specifications = data?.product_categories.map((specification: any) => ({
    title: specification.categories_description || '',
    performance: specification.value_1 || '',
    testingMethods: specification.value_2 || '',
  }));

  return (
    <div className="p-[16px] lg:px-[4rem] xl:px-[12rem] max-w-[144rem] mx-auto flex flex-col gap-[1.6rem]">
      <TableSpecification data={specifications} />
    </div>
  );
};

export default ProductSpecificationPageUI;
