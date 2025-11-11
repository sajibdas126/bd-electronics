import { createContext,useContext, useState } from "react";

export const CartContext = createContext(null)

export const CartProvider = ({children})=>{
    const [cartItem, setCartItem] =useState([])
    
    const addToCart = (product)=>{
        const itemInCart = cartItem.find((item)=> item.id === product.id)
        if(itemInCart){
            // quyntaty if alredy in cart
            const updatedCart = cartItem.map((item)=>
            item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            );
            setCartItem(updatedCart)
        }else{
            //add new item quyntety 
             setCartItem([...cartItem,{...product, quantity:1}])
        }
       
    }

    const updateQuntaty = (cartItem, productId, action)=>{
        setCartItem(
             cartItem.map(item =>{
            if(item.id === productId){
                let newUnit =item.quantity;
                if(action === "increase"){
                    newUnit = newUnit + 1
                }else if(action === "decrease"){
                    newUnit = newUnit -1
                }
                return newUnit >0 ? {... item,quantity:newUnit }: null   
                
            }
            return item;
        }).filter(item => item != null) //remove item Quntaity 0
        )
    }
    //delet quntity
    const deleteItem =(productId) =>{
        setCartItem(cartItem.filter(item => item.id !== productId))
        toast.success("Prodect is added to cart")
    }

    return <CartContext.Provider value={{cartItem, setCartItem, addToCart,updateQuntaty,deleteItem}}>
        {children}
    </CartContext.Provider>
}


export const useCart =()=> useContext (CartContext)