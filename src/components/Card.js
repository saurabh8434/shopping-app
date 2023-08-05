import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/slices/CartSlice';

const Card = ({product}) => {

 const {cart} = useSelector((state)=> state);
 const dispatch = useDispatch();

 const addToCart = ()=>{
    dispatch(add(product));
    toast.success('Item added to cart');
 }

 const removeFromcart = ()=>{
    dispatch(remove(product.id));
    toast.error('Item removed from cart');
 }

  return (
    <div className='card'>
      <div className='card-top'>
        {
          product.title.length<=17 ? <p className='product-title'>{product.title}</p> : <p className='product-title'>{product.title.substr(0,17)}...</p>
        }
        {
          product.description.length<=80 ? <p className='product-desc'>{product.description}</p> : <p className='product-desc'>{product.description.substr(0,80)}...</p>
        }
        <img src={product.image} alt="product" height={220} width={150} className='productImage'/>
      </div>
      <div className='card-bottom'>
        <p className='productPrice'>${product.price}</p>

        {
            cart.some((p)=> p.id===product.id) ? <button onClick={removeFromcart} className='productBtn'>Remove from Cart</button> : <button onClick={addToCart} className='productBtn'>Add to Cart</button>
        }
      </div>
    </div>
  )
}

export default Card
