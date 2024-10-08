import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Footer from './components/Footer/Footer';
import Register from './pages/Register/Register';
import { AuthProvider } from './contexts/AuthContext';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import ListCategory from './components/Categories/ListCategory/ListCategory';
import CategoryForm from './components/Categories/categoryForm/CategoryForm';
import DeleteCategory from './components/Categories/DeleteCategory/DeleteCategory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductForm from './components/Products/productForm/ProductForm';
import SellerHome from './pages/sellerHome/SellerHome';
import Cart from './pages/Cart/Cart';
import ListProduct from './components/Products/ListProduct/ListProduct';
import ProductAbout from './pages/productabout/ProductAbout';
import ProductsByCategory from './components/productsByCategory/ProductsByCategory';
import SellerRoute from './components/SellerRoute/SellerRoute';
import Perfil from './components/Perfil/Perfil';
import PerfilRoute from './components/Perfil/PerfilRoute';
import { Header } from './components/header/Header';



function App() {
  return (
    <>
    <AuthProvider>
    <ToastContainer />
      <BrowserRouter>
        <NavbarWrapper />
        <div className='h-full'>

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
              <Route path="/produtos" element={<ListProduct />} />
              <Route path="/cadastrar-produto" element={<ProductForm />} />
              <Route path="/editar-produto/:id" element={<ProductForm />} />
              <Route path="/informacaoproduto/:id" element={<ProductAbout/>} />
              <Route path="/carrinho" element={<Cart />} />
              <Route path="/products-cat/:id" element={<ProductsByCategory />} />
              
              <Route path="/perfil" 
                element={
                  <PerfilRoute>
                    <Perfil />
                  </PerfilRoute>
                } 
              />
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
  const hideNavbarRoutes = ["/login", "/register", "/recuperar-senha"];

  if (hideNavbarRoutes.includes(location.pathname)) {
    return null;
  }

  return <Header />;
}

export default App;
