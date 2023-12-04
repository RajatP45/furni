import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Shop from './Pages/shop';
import Services from './Pages/services';
import Blog from './Pages/blog';
import Contact from './Pages/contact';
import Cart from './Pages/cart';
import Checkout from './Pages/checkout';
import Thankyou from './Pages/thankyou';
import Login from './Pages/login';
import Signup from './Pages/signup';
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/shop' element={<Shop />} />
        <Route exact path='/services' element={<Services />} />
        <Route exact path='/blog' element={<Blog />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/cart' element={<Cart />} />
        <Route exact path='/checkout' element={<Checkout/>} />
        <Route exact path='/thankyou' element={<Thankyou/>} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;