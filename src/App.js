import About from './Components/About';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import PortfolioSec from './Components/PortfolioSec';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/portfolio' element={<PortfolioSec/>} />
        <Route exact path='/contactus' element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
