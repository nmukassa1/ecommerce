import { useState } from "react";

function CheckoutSummary({basketTotalPrice}) {

    const [deliveryFee, setDeliveryFee] = useState(0)

    return ( 
        <div id="checkout-summary" className='border border-solid border-black p-4'>
            <h2>Summary</h2>
            
            <div className='my-5'>
                <p className="checkout-subtotal flex items-center justify-between">
                    Subtotal <span>£{basketTotalPrice.toFixed(2)}</span>
                </p>
                <p className='flex items-center justify-between my-3'>
                    Delivery <span>{ deliveryFee === 0 ? 'Free' : `£${ (deliveryFee).toFixed(2) }` }</span>
                </p>
                <p className='flex items-center justify-between mt-6 py-2 border-y-2 border-black'>
                    Total <span>£{ ( basketTotalPrice + deliveryFee).toFixed(2) }</span>
                </p>
            </div>

            <div className="checkout-button flex justify-center w-full">
                <button className='bg-black text-white py-5 text-center rounded-xl w-[300px] max-w-full'>Checkout</button>
            </div>
        </div>
     );
}

export default CheckoutSummary ;