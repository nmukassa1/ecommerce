import {useContext, useEffect, useState} from 'react'
import emptyCart from '../../assets/empty-cart.png'
import RenderCartItems from '../Global/RenderCartItems';
import {Link, useLocation, useOutletContext} from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext';

function Cart() {

    const {basket, cartPosition, setCartPosition} = useContext(CartContext)
    const location = useLocation()

    const [plural, setPlural] = useState('Item')

    useEffect(() => {
        // Close cart whenever page changes
        setCartPosition('right-[-100%]')
    }, [location])

    const submitBasket = (e) => {
        e.preventDefault()
        //If any items in the basket has a blank 
        //Find line item that has a quantity of 0
        // const x = basket.items.filter(item => item.qty !== 0);
        // console.log(x)
    }

    return ( 
        <div className={`bg-white fixed top-[48px] ${cartPosition} h-[370px] w-screen md:w-[370px] transition-all duration-700 z-50 shadow-lg p-3 overflow-hidden`}>
            {basket.items.length === 0 && <div className='w-full h-full'><img src={emptyCart} alt="empty cart" className='object-cover w-full h-full'/></div>}

            {basket.items.length > 0 && (
                <form action="/checkout" method='post' className='h-full' onSubmit={(e) => submitBasket(e)}>
                         <div className='h-[65%] overflow-scroll'>
                            <RenderCartItems/>
                         </div>

                        <hr className='my-3 border-black' />

                        <div id="summary" className='flex items-center justify-between'>
                            <span id="basket__qty">
                                {basket.totalItems + ' ' + basket.totalItems.length > 0 ? 'Items' : 'Item'}
                            </span>
                            <span id="total">£{basket.subTotal.toFixed(2)}</span>
                        </div>

                        <Link className='block text-center bg-black text-white w-full py-3 mt-[10px]' to={'/checkout'}>Checkout</Link>
                </form>
            )}
        </div>
    );
}

export default Cart;