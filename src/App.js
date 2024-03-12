import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Registration from "./Pages/Signuppage";
import Login from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import EnterCode from "./Pages/EnterCode";
import ResetPassword from "./Pages/ResetPassword";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import LandingPage from "./Pages/Landing";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/enter-code" element={<EnterCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
