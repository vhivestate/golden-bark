import './App.css';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Nav from './Components/Nav';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>


      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
