import React, { useState, useEffect } from "react";
import "./index.css";
import jwtDecode from "jwt-decode";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import OrderForm from "./components/OrderForm";
// import MailingListForm from "./components/MailingListForm";
import Confirmation from "./components/Confirmation.jsx";
import Faq from "./components/Faq.jsx";
import Navbar from "./components/NavBar.jsx";
import SignUp from "./components/SignUp.jsx";
import SignOut from "./components/SignOut.jsx";
import SignIn from "./components/SignIn.jsx";
import Footer from "./components/Footer.jsx";
import Reviews from "./components/Reviews.jsx";
import ImageGrid from "./components/ImageGrid"; // Import the ImageGrid component
import Profile from "./components/Profile.jsx";
import { getUser } from "./apiConfig/apiConfig.js";
import { useAuth } from "./apiConfig/authContent.js";
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

function AppContent() {
  const { setCurrentUser } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; // Adjust depending on the actual structure of your token
    
        if (userId) {
          const user = await getUser(userId);
          setCurrentUser(user);
        } else {
          console.error('UserId not found in token');
          setCurrentUser(null);
        }
      } else {
        setCurrentUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Navbar />
      <div className="backgroundContainer">{<ImageGrid />}</div>
      <Routes>
        <Route path="/" element={<Home imageSize={"100px"} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/order" element={<OrderForm token={localStorage.getItem('token')} />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

