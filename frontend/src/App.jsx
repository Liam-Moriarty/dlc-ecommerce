import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Layout from "./components/layouts/Layout";

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
      <Route
        path="/login"
        element={isLoggedIn ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/sign-up"
        element={isLoggedIn ? <Navigate to="/" replace /> : <Signup />}
      />

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

      {/* Catch all route - redirect to login if not authenticated */}
      <Route
        path="*"
        element={<Navigate to={isLoggedIn ? "/" : "/login"} replace />}
      />
    </Routes>
  );
}

export default App;
