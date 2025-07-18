import { IProduct } from "@/types";
import React, { FC } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

interface Props {
  data: IProduct[];
}

const HomeItem: FC<Props> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
        {data.slice(5, 15).map((item) => (
          <div
            key={item.id}
            className="group relative rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition duration-300 flex flex-col"
          >
            <div className="relative bg-gray-100 h-[240px] sm:h-[260px] md:h-[280px] overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-3 flex flex-col flex-1 justify-between">
              <div>
                <h2 className="text-sm font-semibold text-gray-900 line-clamp-1">
                  {item.title}
                </h2>
              </div>

              <div className="mt-2 flex items-center justify-between">
                <span className="text-[15px] font-semibold text-black">
                  ${item.price}
                </span>

                <button className="bg-gray-200 hover:bg-gray-300 transition p-1.5 rounded-full">
                  <ShoppingCartIcon className="w-5 h-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(HomeItem);
