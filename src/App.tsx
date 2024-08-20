import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import { AuthProvider } from './contexts/AuthContext';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ListCategory from './components/Categories/ListCategory/ListCategory';
import CategoryForm from './components/Categories/categoryForm/CategoryForm';
import DeleteCategory from './components/Categories/DeleteCategory/DeleteCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './pages/Cart/Cart';

function App() {
  return (
    <>
    <AuthProvider>
    <ToastContainer />
      <BrowserRouter>
      <NavbarWrapper />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/recuperar-senha" element={<ForgotPassword/>} />
            <Route path="/categorias" element={<ListCategory/>} />
            <Route path="/adicionar-categoria" element={<CategoryForm />} />
            <Route path="/editar-categoria/:id" element={<CategoryForm />} />
            <Route path="/deletar-categoria/:id" element={<DeleteCategory />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter >   
    </AuthProvider>
    </>
  );
}

function NavbarWrapper() {
  const location = useLocation();
  const hideNavbarRoutes = [ "/login", "/register", "/recuperar-senha"];

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return <Navbar />;
}

export default App;