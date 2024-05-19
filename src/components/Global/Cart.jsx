import {useEffect, useState} from 'react'
import emptyCart from '../../assets/empty-cart.png'
import RenderCartItems from '../Global/RenderCartItems';
import {Link, useOutletContext} from 'react-router-dom'

function Cart({position, basket, setBasket}) {

    const [plural, setPlural] = useState('Item')

    useEffect(() => {
        basket.totalItems.length > 0 ? setPlural('Items') : setPlural('Item')
    }, [basket.totalItems])

    const submitBasket = (e) => {
        e.preventDefault()
        //If any items in the basket has a blank 
        //Find line item that has a quantity of 0
        // const x = basket.items.filter(item => item.qty !== 0);
        // console.log(x)
    }

    return ( 
        <div className={`bg-white fixed top-[48px] ${position} h-[370px] w-screen md:w-[370px] transition-all duration-700 z-50 shadow-lg p-3 overflow-hidden`}>
            {basket.items.length === 0 && <div className='w-full h-full'><img src={emptyCart} alt="empty cart" className='object-cover w-full h-full'/></div>}

            {basket.items.length > 0 && (
                <form action="/checkout" method='post' className='h-full' onSubmit={(e) => submitBasket(e)}>
                         <div className='h-[65%] overflow-scroll'>
                            <RenderCartItems basket={basket} setBasket={setBasket} />
                            {/* <Renderbasket /> */}
                         </div>

                        <hr className='my-3 border-black' />

                        <div id="summary" className='flex items-center justify-between'>
                            <span id="basket__qty">{basket.totalItems + ' ' + plural}</span>
                            <span id="total">£{basket.subTotal.toFixed(2)}</span>
                        </div>

                        {/* <button className='bg-black text-white w-full py-3 mt-[10px]' type='submit'>Checkout</button> */}
                        <Link className='block text-center bg-black text-white w-full py-3 mt-[10px]' to={'/checkout'}>Checkout</Link>
                        {/* <button className='block text-center bg-black text-white w-full py-3 mt-[10px]' type='submit'>Checkout</button> */}
                </form>
            )}
        </div>
    );
}

export default Cart;