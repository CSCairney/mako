import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./main/Main";

function PageRouter() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </>
  );
}

export default PageRouter;
