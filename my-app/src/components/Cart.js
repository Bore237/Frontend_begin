import'../style/Cart.css'

function Cart(){
    const  monsteraPrice = 8;
    const  lierrePrice = 10; 
    const   fleursPrice = 15;
   
    return( <div className="Img-cart"> 
                <h2>Panier</h2>
                <ul>
                    <li> Monstera: {monsteraPrice}€</li>
                    <li>Lierre: {lierrePrice}€ </li>
                    <li> Fleurs: {fleursPrice}€ </li>
                </ul> 
                Total : {monsteraPrice + lierrePrice + fleursPrice }€
            </div>
    )
}

export default Cart