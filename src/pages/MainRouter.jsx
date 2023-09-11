import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./homepage/homepage";
import Three from "./Three";

import "../pages/MainRouter.css";

function MainRouter() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route exact path='/three-js' element={<Three />} />
      </Routes>
    </>
  );
}

export default MainRouter;
