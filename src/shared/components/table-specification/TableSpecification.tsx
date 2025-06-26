import { Specifications } from '@/shared/libs/data/specifications';

type TableSpecificationProps = {
  data: Specifications[]; // menerima array of specification
};

const TableSpecification = ({ data }: TableSpecificationProps) => {
  return (
    <div className="flex flex-col">
      <div className="border-b border-white px-[4rem] hidden lg:grid grid-cols-3 min-h-[11rem]">
        <div className="h-[6rem] lg:h-auto text-[2.4rem] font-bold flex items-center"></div>

        <div className="text-[2.8rem] font-bold lg:flex items-center">
          Performance
        </div>

        <div className="text-[2.8rem] font-bold lg:flex items-center">
          Testing Methods
        </div>
      </div>

      {data.map((item, index) => (
        <div
          className="border-b border-white px-[1.6rem] lg:px-[4rem] grid grid-cols-1 lg:grid-cols-3 pb-[3.2rem] lg:min-h-[11rem] lg:py-[4rem]"
          key={index}
        >
          <div className="h-[6rem] lg:h-auto text-[2.4rem] lg:pr-[4rem] font-bold flex items-center">
            {item.title}
          </div>

          <div className="text-[2rem] lg:text-[2.4rem] hidden lg:flex items-center">
            {item.performance}
          </div>

          <div className="text-[2rem] lg:text-[2.4rem] hidden lg:flex items-center">
            {item.testingMethods}
          </div>

          <div className="flex flex-col gap-[1.6rem] text-[2rem] lg:hidden">
            <div className="flex justify-between">
              <div className="flex-[1]">Performance</div>
              <div className="flex-[1] text-right">{item.performance}</div>
            </div>

            <div className="flex justify-between">
              <div className="flex-[1]">Testing Methods</div>
              <div className="flex-[1] text-right">{item.testingMethods}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableSpecification;
