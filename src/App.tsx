import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AuthProvider } from './contexts/AuthContext';

//<Route path="/cadastro" element={<Cadastro />} />

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/sobre" element={<About />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter >
      </AuthProvider>
    </>
  );
}
export default App;