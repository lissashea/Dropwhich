import React from "react";
import "./index.css";
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

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className="backgroundContainer">
          {/* Add the ImageGrid component here */}
          <ImageGrid />
        </div>
        <Routes>
          <Route path="/" element={<Home imageSize="100px" />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order" element={<OrderForm />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/confirmation" element={<Confirmation />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
