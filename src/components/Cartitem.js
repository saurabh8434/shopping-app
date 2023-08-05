import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const Cartitem = ({item}) => {

 const dispatch = useDispatch();
 const removeFromCart = ()=>{
  dispatch(remove(item.id));
  toast.error('Item removed successfully from cart');
 }

  return (
    <div className='cartItem'>
        <img src={item.image} alt="item" height={220} width={150} className='cartImage'/>

      <div className='cartItem-right'>
        <h1 className='cartItemTitle'>{item.title}</h1>
        <p className='cartItemDesc'>{item.description.substr(0,100)}...</p>
        <div className='cartItem-bottom'>
          <p className='cartItem-price'>${item.price}</p>
          <AiFillDelete onClick={removeFromCart} className='cartItemIcon'/>
        </div>
      </div>
    </div>
  )
}

export default Cartitem
