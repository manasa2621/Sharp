import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import deskImage from "./book.jpg"; // Import your image file here

const LandingPage = () => {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState("");
  const text = [
    "THE WORLD'S LEADING DESK SCHEDULING PLATFORM",
    "The most recommended desk booking system for hybrid work",
    "Give your people a simple desk booking software tool to book their desks and rooms — next to the co-workers they miss seeing.",
    "Watch engagement and productivity soar!",
  ];
  let index = 0;
  let isTyping = true;

  useEffect(() => {
    const typeText = () => {
      if (isTyping) {
        if (index < text.length) {
          const newText = text[index];
          setDisplayText(newText.slice(0, displayText.length + 1));
          if (displayText === newText) {
            index++;
            setTimeout(() => setDisplayText(""), 1000);
          }
        } else {
          isTyping = false;
        }
      }
    };

    const typingInterval = setInterval(typeText, 100);
    return () => clearInterval(typingInterval);
  }, [displayText, text]);

  const handleSignupClick = () => {
    navigate("/register");
  };

  const handleSigninClick = () => {
    navigate("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Left Side Section */}
      <div
        style={{ flex: 1, padding: "20px", textAlign: "center", color: "blue" }}
      >
        {index < 2 ? <h1>{displayText}</h1> : <h2>{displayText}</h2>}
      </div>
      <h1>Welcome to Book My Desk</h1>

      {/* Right Side Section with Animation */}
      <div style={{ flex: 2, padding: "20px", position: "relative" }}>
        <img src={deskImage} alt="Book My Desk" style={imageStyle} />

        <div>
          <button onClick={handleSignupClick} style={buttonStyle}>
            Sign Up
          </button>
          <button onClick={handleSigninClick} style={buttonStyle}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px",
};

const imageStyle = {
  maxWidth: "100%",
  animation: "float 5s infinite", // Add animation here
};

export default LandingPage;
