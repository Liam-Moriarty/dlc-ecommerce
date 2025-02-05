import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/layouts/Layout";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import SpecialLayout from "./components/layouts/SpecialLayout";
import Favorites from "./pages/Favorites";

// Protected Route wrapper component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = window.localStorage.getItem("token");

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  const isLoggedIn = window.localStorage.getItem("token");

  return (
    <Routes>
      {/* routes for login and signup page */}
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/sign-up"
        element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />}
      />

      {/* routes for general page */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Layout>
              <Outlet />
            </Layout>
          </ProtectedRoute>
        }
      >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>

      {/* routes for special layout page */}
      <Route
        element={
          <ProtectedRoute>
            <SpecialLayout>
              <Outlet />
            </SpecialLayout>
          </ProtectedRoute>
        }
      >
        <Route path="profile" element={<Profile />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>

      {/* Catch all route - redirect to login if not authenticated */}
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
