import { Typography } from "@mui/material";
import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import { MainPage } from "./pages/mainPage/Mainpage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='*' element={
          <div>
            <Typography variant='h5' textAlign='center'>
              This Page is not found
            </Typography>
          </div>
        } />
      </Routes>
    </Router>
  );
};

export default App;
