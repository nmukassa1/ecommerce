import {useState, useEffect, useContext} from 'react'
import CheckoutSummary from '../components/CheckoutPage/CheckoutSummary';
import CheckoutItems from '../components/CheckoutPage/CheckoutItems';
import { CartContext } from '../contexts/CartContext';


function Checkout() {
    const {basket} = useContext(CartContext)
    const [basketTotalPrice, setBasketTotalPrice] = useState(0)

    useEffect(() => {
        /* 
            NOTES:
            Filtering items that have a quantity higher than 1 
            in order to not return NaN when displaying total basket price & quantity in basket
        */
        let filteredItemsAboveZero = basket.items.filter(item => item.qty > 0);
        console.log(filteredItemsAboveZero);
        setBasketTotalPrice(filteredItemsAboveZero.reduce((prev, current) => prev + current.price * current.qty, 0))
    }, [basket])

    return ( 
        <div id="checkout-page" className="h-full px-8">
            <h1 id="checkout-page-title" className="py-10 text-2xl text-center">Checkout</h1>

            <div className="checkout-page__container">
                <CheckoutItems />
                <CheckoutSummary basketTotalPrice={basketTotalPrice} />
            </div>
        </div>
     );
}

export default Checkout;