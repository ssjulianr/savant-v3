import React from 'react';
import { Routes, Route, Link, useLocation, useParams } from 'react-router-dom';

import Home from '../pages/Home';
import Merch from '../pages/Merch';
import Contact from '../pages/Contact';
import Cart from '../pages/Cart';
import ProductDetails from './ProductDetails';

import { FaBagShopping } from 'react-icons/fa6';

const Navbar = () => {
  const location = useLocation();
  let {id} = useParams()
  return (
    <>
      <aside className="top-nav">
          <marquee loop="-1" scrollamount="5" width="100%"><h5>SALE: USE DISCOUNT CODE 'R2H-C13' FOR 25% OFF + FREE SHIPPING!</h5></marquee>
      </aside>

      <nav>
        <Link to='/'>
          <img src='https://raw.githubusercontent.com/ssjulianr/savant/main/images/savant.webp' alt='logo' className='logo' />
        </Link>
        <ul id='navbar'>
          <li>
            <Link
              to='/'
              className={location.pathname === '/' ? 'active' : ''}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to='/merch'
              className={location.pathname === '/merch'  ? 'active' : ''}
            >
              MERCH
            </Link>
          </li>
          <li>
            <Link
              to='/contact'
              className={location.pathname === '/contact' ? 'active' : ''}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link to='/cart' id='lg-bag' className={location.pathname === '/cart' ? 'active' : ''} >
              <FaBagShopping />
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/merch' element={<Merch />} />
        <Route path='/merch/:id' element={<ProductDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
};

export default Navbar;
