import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function addToCartButton({product}) {
    const {handleAddToCart} = useContext(CartContext)
    return (<button 
        className="bg-black text-white px-3 py-2 hover:bg-white hover:text-black hover:border-black hover:border" 
        onClick={() => handleAddToCart(product)}>Add To Cart</button> 
    )
}

export default addToCartButton;