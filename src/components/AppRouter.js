import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Housing from "../pages/Housing";
import NotFound from "../pages/NotFound";

/**
 * This component defines the routes for the application using react-router-dom.
 * @returns {JSX.Element} The AppRouter Component.
 */

const AppRouter = () => {
  return (
    <Routes>
      {/* Define the routes for the application */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/locations/:id" element={<Housing />} />
      {/* Redirect any unmatched routes to the 404 Not Found page */}
      <Route path="*" element={<Navigate to="/404" replace />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
