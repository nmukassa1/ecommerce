import { useEffect, useState } from "react";
import RootLayout from "../../RootLayout";

function RenderCartItems({basket, setBasket}) {

    const [isShown, setShown] = useState('block');

    const updateInputField = (e, key) => {
        const updatedValue = parseInt(e.target.value);
        
        setBasket(prevBasket => ({
            ...prevBasket, 
            items: prevBasket.items.map(element => {
                if (element.key === key) {
                    return { ...element, qty: updatedValue };
                }
                return element; // Return the unchanged element if the key doesn't match
            })
        }));
  
    };
    

    const updateBasket = (e) => {
        const itemId = parseInt(e.target.parentElement.parentElement.id);
        const item = basket.items.filter(item => item.key === itemId);
        // console.log(item)
        let filteredItemsAboveZero = basket.items.filter(item => item.qty > 0); 
        let totalItems = filteredItemsAboveZero.reduce((prev, current) => prev + current.qty, 0);
        let subTotal = filteredItemsAboveZero.reduce((prev, current) => prev + current.price * current.qty, 0);

        const newBasket = {subTotal: parseFloat(subTotal.toFixed(2)), totalItems: totalItems, items: basket.items}
        setBasket(newBasket)

    }

    const  handleRemoveItemFromBasket = (e) => {
        const itemToRemove = parseInt(e.target.parentElement.parentElement.id);
        const newItems = basket.items.filter((item) => item.key != itemToRemove);
        let totalItems = newItems.reduce((prev, current) => prev + current.qty, 0);
        let subTotal = newItems.reduce((prev, current) => prev + current.price * current.qty, 0);

        const newBasket = {subTotal: parseFloat(subTotal.toFixed(2)), totalItems: totalItems, items: newItems}
        // console.log(newBasket);
        setBasket(newBasket);
    }


    return ( 
        <div id="cart-items" className='h-full'>
            { basket.items.map((item, index) => (
                <div key={item.key} id={item.key} className="flex w-full justify-around items-center mb-2">
                    <img src={item.img} alt="" className='w-[90px] h-auto'/>
                    <div className="item__info w-1/2">
                        <span className='block'>{item.title}</span>
                        <span className='block'>£{item.price}</span>
                        <span className='block'>{item.author.join(' & ')}</span>
                    </div>
                    <div className='cart-items-qty-box flex flex-col items-center'>
                        <input 
                            type="number" 
                            className='border border-black w-[40px] h-[40px] text-center text-2xl font-thin' 
                            value={item.qty}
                            // value={value}
                            // onChange={(e) => updateBasket(e)}
                            onChange={(e) => updateInputField(e, item.key)}
                            // onFocus={() => setShown('block')}
                        />
                        <button 
                            className={`update-item text-xs mt-1.5 tracking-wider ${isShown}`} 
                            onClick={(e) => updateBasket(e)}>update</button>
                        <button 
                            className='remove-item text-xs mt-1.5 tracking-wider' 
                            onClick={(e) => handleRemoveItemFromBasket(e)}>remove</button>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default RenderCartItems;