import UsersCart from "@/components/UsersCart/UsersCart";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Users | Bazarli24",
  description: "O'zbekistondagi birinchi raqamli online market",
};
const Users = async () => {
  const res = await fetch("https://dummyjson.com/users");
  const user = await res.json();
  console.log(user);

  return (
    <div>
      <UsersCart data = {user?.users}/>
    </div>
  );
};

export default React.memo(Users);
