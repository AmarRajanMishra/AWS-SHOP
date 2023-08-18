import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/Error/PageNotFound';
import SingleProduct from './components/product/SingleProduct';
import CreateProduct from './components/product/CreateProduct';
import CartPage from './pages/CartPage';
import RegistrationPage from './pages/auth/Registration';
import LoginPage from './pages/auth/Login';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/registration' element={<RegistrationPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/single-product/:id' element={<SingleProduct/>} />
        <Route path='/update-product/:id' element={<SingleProduct/>} />
        <Route path='/create-product' element={<CreateProduct/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
