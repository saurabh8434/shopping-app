import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Cartitem from '../components/Cartitem';

const Cart = () => {

  const {cart} = useSelector((state)=> state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc, curr) => acc+curr.price, 0));
  },[cart])

  return (
            <div>
                {
                  cart.length>0 ? <div className='cart-container-1'>

                    <div className='cartItem-container'>
                    {
                      cart.map((item)=>(
                        <Cartitem key={item.id} item={item}/>
                      ))
                    }
                    </div>

                    <div className='cart-right'>
                      <div>
                        <div className='cart-right-title'>Your Cart</div>
                        <div className='cart-right-subTitle'>Summary</div>
                        <p style={{fontWeight:"600"}}>
                          Total items:
                          <span style={{fontWeight:'300'}}> {cart.length}</span>
                        </p>
                      </div>

                      <div className='cart-right-bottom'>
                        <p>Total Amount: <span style={{fontWeight:"bold"}}>${totalAmount}</span></p>
                        <button className='cart-rightBtn'>CheckOut Now</button>
                      </div>
                    </div>
                  </div> : <div className='empty-cart'>
                    <h1>Cart Empty</h1>
                    <NavLink to='/'>Shop Now</NavLink>
                  </div>
                }
            </div>
        )
}

export default Cart
