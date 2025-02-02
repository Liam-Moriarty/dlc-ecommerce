import React from "react";
import { Navbar, Header, Footer } from "./index";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation();

  // Define the pattern for routes where Header should be hidden
  const hideHeaderRoutes = /^\/product-details\/\d+|^\/profile/; // Matches `/product/{id}` and `/product/{id}/anything OR /profile`

  return (
    <main className="container max-desktop:w-full">
      <Navbar />
      {!hideHeaderRoutes.test(location.pathname) && <Header />}
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
