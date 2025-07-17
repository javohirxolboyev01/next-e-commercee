import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
};

export default React.memo(Layout);
