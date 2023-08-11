import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import PageNotFound from './components/Error/PageNotFound';
import SingleProduct from './components/product/SingleProduct';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/single-product/:id' element={<SingleProduct/>} />
        <Route path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
