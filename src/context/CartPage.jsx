import React from 'react'
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom'


const CartPage = () => {
    const{cart,removeFromCart,clearCart,cartTotal,cartCount}=useCart();
    console.log('Cart items:',cart);
  return (
    <>
      <div className='container pt-5'>
         {/* <Link to="/home"><button className='btn btn-primary'> GO BACK</button></Link> */}
        <h2 className='pt-5'>Your Cart</h2>
        {cartCount()}
        {cart.length===0?(<p>Your cart is empty <span> <Link to="/home">
            <button className="btn btn-success ms-5">Go BACK</button>
            </Link></span></p>):(
            <>
            <ul>
                {cart.map((item)=>(
                    <li key={item.id} className='mb-3 d-flex align-items-center'>
                         <img src={item.image}
                          alt={item.name}
                           style={{
                             width: '80px',
                              height: '100px',
                               objectFit: 'cover',
                                marginRight: '15px' }} />
                         <div style={{
                            display:'flex',
                            alignItems:'center',
                            gap:'20px'
                         }}>
                            <div>
                           
                       <p><b>Name:</b> {item.name}</p> 
                        <p ><b className='text-primary'>Quantity:</b> {item.quantity}</p> 
                        <p><b className='text-danger'>TicketPrice:</b><b className='px-3'>{item.ticketprice}</b></p>
                        </div>
                        <br/>
                        <button className='btn btn-danger px-5' onClick={()=>removeFromCart(item)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <p className='text-danger'><strong>Total:</strong>${cartTotal()}</p>
            <button className='btn btn-secondary' onClick={clearCart}>Clear Cart</button>
            <Link to="/home">
            <button className="btn btn-success ms-5">Go BACK</button>
            </Link>
            </>
        )}
      </div>
    </>
  )
}

export default CartPage
