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
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminRoute from './components/Routes/AdminRoute';
import PrivateRoute from './components/Routes/Private';
import UserDashboard from './pages/user/UserDashboard';
import Test from './components/Test';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/test' element={<Test/>}/>
        <Route path='/dashboard' element={<AdminRoute/>}>
          <Route path='admin' element={<AdminDashboard/>}/>
          <Route path='admin/create-product' element={<CreateProduct/>} />
          <Route path='admin/update-product/:id' element={<SingleProduct/>} />
        </Route>
        <Route path='/dashboard' element={<PrivateRoute/>}>
          <Route path='user' element={<UserDashboard/>}/>
        </Route>
        <Route path='/product' element={<AllProducts/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/contact' element={<ContactUs/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/single-product/:id' element={<SingleProduct/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
