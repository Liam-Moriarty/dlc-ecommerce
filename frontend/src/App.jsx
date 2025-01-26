import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Navbar, Header, Footer } from "./components/layouts/index";

function App() {
  return (
    <BrowserRouter>
      <main className="container max-desktop:w-full">
        <Navbar />
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>

        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
