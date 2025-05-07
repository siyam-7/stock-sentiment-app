// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
import StockSuggestions from "./components/StockSuggestions";
import Signup from "./components/Signup";

function App() {
  const [userToken, setUserToken] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserToken={setUserToken} />} />
        <Route path="/login" element={<Login setUserToken={setUserToken} />} />
        <Route path="/signup" element={<Signup setUserToken={setUserToken} />} />
        <Route path="/wishlist" element={<Wishlist token={userToken} />} />
        <Route path="/suggestions" element={<StockSuggestions />} />
      </Routes>
    </Router>
  );
}

export default App;
