import { useOutletContext } from "react-router-dom";

function addToCartButton({product}) {
    const [addToCart] = useOutletContext()
    return (<button 
        className="bg-black text-white px-3 py-2 hover:bg-white hover:text-black hover:border-black hover:border" 
        onClick={() => addToCart(product)}>Add To Cart</button> 
    )
}

export default addToCartButton;