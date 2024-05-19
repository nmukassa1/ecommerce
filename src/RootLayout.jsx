import {useState, useEffect} from 'react'
import {Outlet, useLocation} from 'react-router-dom'

import Header from './components/Global/Header'
import Cart from './components/Global/Cart'

import useScrollToTop from './Hooks/useScrollToTop';
import { stringify } from 'postcss';

function RootLayout() {
    
    const location = useLocation()
    const {scrollToTop} = useScrollToTop()

    useEffect(() => {
        scrollToTop()
        setCartPosition('right-[-100%]')
    }, [location])
    
    // const [cartItems, setCartItems] = useState([])
    const [basket, setBasket] = useState({subTotal: 0, totalItems: 0, items: []})
    const [confirmAddToCart, setConfirmAddToCart] = useState('hidden')
    const [cartPosition, setCartPosition] = useState('right-[-100%]')


    const addToCart = (itemToAdd) => {
        const itemKey = itemToAdd.key;
        const itemsArray = basket.items || []; // Ensure itemsArray is initialized as an array
    
        // Check if itemKey is valid
        if (itemKey === undefined) {
            console.error("Invalid itemKey:", itemKey);
            return;
        }
    
        // Check if itemsArray is valid
        if (!Array.isArray(itemsArray)) {
            console.error("Invalid itemsArray:", itemsArray);
            return;
        }
    
        // Find if the item already exists in the cart
        const exist = itemsArray.find(element => element.key === itemKey);
    
        if (exist === undefined) {
            // Item doesn't exist, add it to the cart
            const updatedItems = [...itemsArray, { ...itemToAdd, qty: 1 }];
            setBasket(prevBasket => ({ subTotal: parseFloat(prevBasket.subTotal) + itemToAdd.price, totalItems: prevBasket.totalItems + 1, items: updatedItems }));
        } else {
            // Item already exists, update its quantity
            setBasket(prevBasket => ({
                subTotal: prevBasket.subTotal + itemToAdd.price, 
                totalItems: prevBasket.totalItems + 1,
                items: prevBasket.items.map(element =>
                    element.key === itemKey ? { ...exist, qty: exist.qty + 1 } : element
                )
            }));
        }

        // Open cart draw
        handleAddToCartAnimation();
    };
    
    function handleAddToCartAnimation(){
        if(cartPosition === 'right-[-100%]') {
            setCartPosition('right-0')
            setTimeout(() =>{
                setCartPosition('right-[-100%]')
            }, 2500)
        } else{
            setTimeout(() =>{
                setCartPosition('right-[-100%]')
            }, 2500)
        }
    }

    const toggleCart = () => {
        cartPosition === 'right-[-100%]' ? setCartPosition('right-0') : setCartPosition('right-[-100%]');
    }

    return ( 
        <div id="root-layout" className='min-h-screen relative'>
            <Header basket={basket} toggleCart={toggleCart}/>
            <Cart position={cartPosition} basket={basket} setBasket={setBasket}/>
            <main className=''>
                {/* <h1>{JSON.stringify(basket.items)}</h1> */}
                <Outlet context={[addToCart, basket, setBasket]} />
            </main>
        </div>
    );
}

export default RootLayout;