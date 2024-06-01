import {useState, useEffect, useContext} from 'react'
import {Outlet, useLocation} from 'react-router-dom'

import Header from './components/Global/Header'
import Cart from './components/Global/Cart'

import useScrollToTop from './Hooks/useScrollToTop';
import { CartContext } from './contexts/CartContext';

function RootLayout() {
    const {setCartPosition} = useContext(CartContext)

    const location = useLocation()
    const {scrollToTop} = useScrollToTop()

    useEffect(() => {
        //Scroll to top of page whnever page changes
        scrollToTop()
    }, [location])
    

    return ( 
        <div id="root-layout" className='min-h-screen relative'>
            <Header/>
            <Cart />
            <main className=''>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;