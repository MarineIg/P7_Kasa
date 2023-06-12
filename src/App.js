import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import AppRouter from "./components/AppRouter";

/**
 * The component is the root of the application.
 * It wraps the application in a react-router-dom router and renders the Header, AppRouter and Footer components.
 * @returns {JSX.Element} The App component.
 */

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <main>
          <AppRouter />
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
