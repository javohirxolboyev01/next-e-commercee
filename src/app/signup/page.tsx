import SignUp from "@/components/SignUp/SignUp";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "signup | Bazarli24 ",
  description: "O'zbekistondagi birinchi raqamli online market",
};
const SignupPage = () => {
  return (
    <div>
      <SignUp />
    </div>
  );
};

export default React.memo(SignupPage);
