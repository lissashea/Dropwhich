import React from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
import Confirmation from "./components/Confirmation.jsx";
import Faq from "./components/Faq.jsx";
import Navbar from "./components/NavBar.jsx";
import SignUp from "./components/SignUp.jsx";
import SignOut from "./components/SignOut.jsx";
import SignIn from "./components/SignIn.jsx";
import Footer from "./components/Footer.jsx";
import Reviews from "./components/Reviews.jsx";
import ImageGrid from "./components/ImageGrid";
import Profile from "./components/Profile.jsx";
import { AuthProvider } from "./apiConfig/authContent.js";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </div>
  );
}

const routeConfig = [
  { path: "/", element: <Home imageSize="100px" /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signout", element: <SignOut /> },
  { path: "/profile", element: <Profile /> },
  { path: "/menu", element: <Menu /> },
  { path: "/order", element: <OrderForm /> },
  { path: "/faq", element: <Faq /> },
  { path: "/confirmation", element: <Confirmation /> },
  { path: "/reviews", element: <Reviews /> },
];

function AppContent() {
  return (
    <>
      <Navbar />
      <div className="backgroundContainer">
        <ImageGrid />
      </div>
      <Routes>
        {routeConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
