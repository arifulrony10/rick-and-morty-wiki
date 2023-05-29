import { useState, useEffect } from 'react';
// Import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Import React Router Dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Footer from './components/footer/footer.component';

import Navbar from './components/navbar/navbar.component';
import Home from './pages/home.component';
import Episodes from './pages/episodes.component';
import Locations from './pages/locations.component';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Navbar />
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/episodes' element={<Episodes />} />
        <Route path='/locations' element={<Locations />} />
      </Routes>
    </Router>
  );
};

export default App;
