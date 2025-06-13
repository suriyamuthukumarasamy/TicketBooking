import { createContext, useContext, useEffect, useState } from "react";


const CartContext=createContext();
export const useCart=()=>{
    return useContext(CartContext);
}
export const CartProvider=({children})=>{
    const [cart,setCart]=useState(()=>{
        try{
 const savedCart=localStorage.getItem('cart');
 if(!savedCart || savedCart === "undefined") {
    return[];
 }
return JSON.parse(savedCart);
        }catch(e){
             console.error("Error parsing cart from localStorage:", e);
      return [];
    }
        })
       
// {add to cart}

const addToCart=(item)=>{
    const ItemInCart=cart.find((items)=>items.id=== item.id);
    if(ItemInCart){
        setCart(
            cart.map((items)=>items.id===item.id?{...items,quantity:items.quantity+1}:items)
        );
    }else{
        setCart([...cart,{...item,quantity:1}]);
    }
};

// {remove from cart}
const removeFromCart=(item)=>{
    const ItemInCart=cart.find((items)=>items.id===item.id);
    if(ItemInCart.quantity===1){
        setCart(cart.filter((items)=>items.id!==item.id));
    }else{
        setCart(
            cart.map((product)=>
            product.id===item.id?{...product,quantity:product.quantity-1}:product
            )
        );
    }
};
// {clearcart}
const clearCart=()=>{
    setCart([]);
}
// {carttotal}
const cartTotal=()=>{
    return cart.reduce((total,item)=>total+item.ticketprice*item.quantity,0);
};
// {cart count}
const cartCount=()=>{
    return cart.reduce((count,item)=>count+item.quantity,0)
}
useEffect(()=>{
    localStorage.setItem("cart",JSON.stringify(cart));
},[cart]);
return(
    <CartContext.Provider
    value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount
    }}
    >
    {children}
</CartContext.Provider>
);
};



