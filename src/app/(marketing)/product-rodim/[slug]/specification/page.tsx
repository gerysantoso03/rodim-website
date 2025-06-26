"use client"
import TableSpecification from "@/shared/components/table-specification/TableSpecification";
import { specifications } from "@/shared/libs/data/specifications";
import { useEffect } from "react";

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  // const product = products.find(p => p.productUrl.split('/').pop() === params.slug);
  // if (!product) return '';

  useEffect(() => {
    console.log('params = ', params)
  }, [])

  return (
    <div className='p-[16px] lg:px-[4rem] xl:px-[12rem] max-w-[144rem] mx-auto flex flex-col gap-[1.6rem]'>
      <TableSpecification data={specifications} />
    </div>
  )
}

export default Page