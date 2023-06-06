import './App.css';
import About from './Components/About';

import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={<Main/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/portfolio' element={<Portfolio/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
