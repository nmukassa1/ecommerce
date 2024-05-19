import RenderCartItems from "../Global/RenderCartItems";

function CheckoutItems({basket, setBasket}) {
    return ( 
        <div id="checkout-items">
             <RenderCartItems basket={basket} setBasket={setBasket} />
        </div>
     );
}

export default CheckoutItems;