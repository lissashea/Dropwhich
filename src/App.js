import React, { useState, useEffect } from "react";
import "./index.css";
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
import { AuthProvider } from "./apiConfig/authContent.js";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const user = await getUser(); // If getUser requires the userId from the token, you'll need to decode the token to get it.
        setUser(user);
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="App">
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;
