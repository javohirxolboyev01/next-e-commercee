"use client";
import React, { FC } from "react";
import {
  EnvelopeIcon,
  PhoneIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { User } from "@/types";

interface Props {
  data: User[];
}

const UsersCart: FC<Props> = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-center gap-4 mb-8 px-4">
        <div className="w-20 h-px bg-gray-300" />
        <h1 className="text-2xl font-bold text-gray-800 whitespace-nowrap text-center">
          Userlar ro'yxati
        </h1>
        <div className="w-20 h-px bg-gray-300" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-4 flex flex-col"
          >
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="w-full h-36 object-cover rounded-md mb-3"
            />
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              {user.firstName} {user.lastName}
            </h2>
            <div className="text-sm text-gray-600 flex items-center gap-1 mb-1">
              <EnvelopeIcon className="h-4 w-4 text-gray-500" />
              {user.email}
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-1 mb-1">
              <PhoneIcon className="h-4 w-4 text-gray-500" />
              {user.phone}
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-1 mb-1">
              <AcademicCapIcon className="h-4 w-4 text-gray-500" />
              {user.university}
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-1 mb-1">
              <BuildingOffice2Icon className="h-4 w-4 text-gray-500" />
              {user.company.name}
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-1 mt-auto">
              <MapPinIcon className="h-4 w-4 text-gray-500" />
              {user.address.city}, {user.address.country}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(UsersCart);
