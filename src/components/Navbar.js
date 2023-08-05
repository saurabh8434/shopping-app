import React from 'react'
import {FaShoppingCart} from 'react-icons/fa';
import logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cart} = useSelector((state)=> state);

  return (
    <div className='navbar'>
      <div className='innerNav'>
        <div className='navLeft'>
          <NavLink to="/"> <img src={logo} alt="logo" height={50} width={50}/> </NavLink>
          <NavLink to="/"> <span className='logoName'>ECOMZY</span> </NavLink>
        </div>
          
          <div className='navRight'>
            <NavLink to='/' className='homeNav'> <p >Home</p> </NavLink>
            <div className='cartIconContainer'>
              <NavLink to='/cart'> <FaShoppingCart className='cartIcon'/> </NavLink>
              {
                cart.length>0 && <div className='cart-length'>{cart.length}</div>
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
