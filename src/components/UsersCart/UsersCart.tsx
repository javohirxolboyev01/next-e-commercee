import { User } from "@/types";
import React, { FC } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

interface Props {
  data: User[];
}

const UsersCart: FC<Props> = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Foydalanuvchilar
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col"
          >
            <img
              src={item.image}
              alt={item.firstName}
              className="w-full h-36 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {item.firstName} {item.lastName}
            </h2>
            <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              <EnvelopeIcon className="h-4 w-4 text-gray-500" />
              {item.email}
            </div>
            <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              <PhoneIcon className="h-4 w-4 text-gray-500" />
              {item.phone}
            </div>
            <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              <AcademicCapIcon className="h-4 w-4 text-gray-500" />
              {item.university}
            </div>
            <div className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              <BuildingOffice2Icon className="h-4 w-4 text-gray-500" />
              {item.company.name}
            </div>
            <div className="text-sm text-gray-600 mt-1 flex items-center gap-1 mt-auto">
              <MapPinIcon className="h-4 w-4 text-gray-500" />
              {item.address.city}, {item.address.country}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(UsersCart);
