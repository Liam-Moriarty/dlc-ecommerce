import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SpecialLayout = ({ children }) => {
  return (
    <main className="container max-desktop:w-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default SpecialLayout;
