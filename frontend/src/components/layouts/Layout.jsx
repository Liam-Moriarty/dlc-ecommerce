import React from "react";
import { Navbar, Header, Footer } from "./index";

const Layout = ({ children }) => {
  return (
    <main className="container max-desktop:w-full">
      <Navbar />
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
