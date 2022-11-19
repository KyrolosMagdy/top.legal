import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { MainPage } from "./pages/mainPage/Mainpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
