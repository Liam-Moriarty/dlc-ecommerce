import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import { Navbar, Header, Footer } from "./components/layouts/index";

function App() {
  return (
    <Routes>
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="*"
        element={
          <main className="container max-desktop:w-full">
            <Navbar />
            <Header />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>

            <Footer />
          </main>
        }
      />
    </Routes>
  );
}

export default App;
