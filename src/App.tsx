//import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Singup from './pages/Login/Singup';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Singup />} />
          <Route path="/singup" element={<Singup />} />
        </Routes>
      </Router>
    </>
);
}
export default App;