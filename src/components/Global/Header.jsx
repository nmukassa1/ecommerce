import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

function Header({basket, toggleCart}) {

    return ( 
        <header className='flex items-center justify-center px-8 sticky top-0 bg-white w-screen z-50'>
            <div id="brand" className='relative left-1/2 translate-x-[-50%]'>
                <Link to="/" className='font-semi-bold text-5xl'>UNWIND</Link>
            </div>

            <div id="cart" className='ml-auto'>
                <button onClick={toggleCart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span className={basket.totalItems !== 0 ? 'text-orange-500' : ''}> {basket.totalItems > 10 ? '10+' : basket.totalItems}</span>
                </button>
            </div>
        </header>
    );
}

export default Header;