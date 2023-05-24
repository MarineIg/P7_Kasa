import { BrowserRouter as Router } from "react-router-dom";

import Header from "./layout/Header";
import AppRouter from "./components/AppRouter";
import Footer from "./layout/Footer";

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
