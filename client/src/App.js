import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';

import Footer from './components/Footer';
import PageNotFound from './components/Error/PageNotFound';
import SingleProduct from './components/product/SingleProduct';
import CreateProduct from './components/product/CreateProduct';
import CartPage from './pages/CartPage';
import Header from './components/NavBar/Header';
import LoginPage from './pages/authPages/LoginPage';
import RegisterPage from './pages/authPages/RegisterPage';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import AllProducts from './pages/AllProducts';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<AllProducts/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<AboutUs/>} />
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
