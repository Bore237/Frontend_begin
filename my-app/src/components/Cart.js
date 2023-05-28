import'../style/Cart.css';
import {useState} from 'react'

function Cart({cart, updateCart}){
    const [isOpen, setIsOpen] =  useState(false)

    const  monsteraPrice = 8;
    const  lierrePrice = 10; 
    const   fleursPrice = 15;
   
    return isOpen ?( 
        <div className="Img-cart"> 
        	<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
            <h2>Panier</h2>
             <h3>Total : {monsteraPrice * cart }€ </h3>
             <button onClick={() => updateCart(0)}>
                Vider le Panier
             </button>
            </div>
    ) : (
        <div className='lmj-cart-cloded'> 
        <button 
            className='lmj-cart-closed'
            onClick={() => setIsOpen(true)}
        >
             Ouvrir le panier 
        </button>
        </div>
    )
}

export default Cart