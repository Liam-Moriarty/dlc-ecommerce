import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Categories from "./components/Categories";

function App() {
  return (
    <BrowserRouter>
      <main className="container max-desktop:w-full">
        <Navbar />
        <Header />
        <Categories />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
