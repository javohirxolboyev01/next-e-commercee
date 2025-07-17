import { IProduct } from "@/types";
import React, { FC } from "react";
import { ShoppingCartIcon} from "@heroicons/react/24/solid";

interface Props {
  data: IProduct[];
}

const HomeItem: FC<Props> = ({ data }) => {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-4 md:px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
        {data.slice(5, 15).map((item) => (
          <div
            key={item.id}
            className="relative rounded-xl overflow-hidden bg-white shadow transition-transform duration-300 hover:scale-[1.02] hover:shadow-md min-h-[330px] flex flex-col"
          >
            <div className="relative overflow-hidden h-[170px]">
              <img
                src={item.thumbnail}
                alt={item.title}
                width={300}
                height={300}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <div className="p-2 flex-1 flex flex-col justify-between space-y-1">
              <div>
                <h2 className="font-medium text-sm line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-xs line-clamp-2">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-1">
                <span className="text-red-600 font-semibold text-sm">
                  ${item.price}
                </span>
              </div>
            </div>

            <button className="absolute bottom-2 right-2 bg-gray-200 hover:bg-gray-300 transition p-2 rounded-full">
              <ShoppingCartIcon className="w-5 h-5 text-black" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(HomeItem);
