import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo  from './assets/LOGO.svg'
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Location from './pages/Locations';

function App() {
  return (
    <Router>
      <Header logo={logo}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/locations/:id" element={<Location/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  
  );
}

export default App;
