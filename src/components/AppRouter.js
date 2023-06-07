import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Location from "../pages/Location";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations/:id" element={<Location />} />
      <Route path="*" element={<Navigate to='/404' replace />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
