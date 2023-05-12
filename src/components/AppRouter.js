import React from "react";
import { Routes, Route } from "react-router-dom";

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
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
