import {Link} from 'react-router-dom'
import AddToCartButton from '../Global/AddToCartButton'
import ProductCard from './ProductCard';
import { render } from 'react-dom';
import { useState, useEffect } from 'react';

function RenderCards({data, id, genre, renderAmount}) {

  const [products, setProducts] = useState()

  useEffect(() => {
    filterQuery()
  }, [])

  function filterQuery(){
    let products = [];
    if(genre) products = data.filter((item) => { return item.genre === genre.toLowerCase()})
    products = products.slice(0 , renderAmount)
    setProducts(products)
  }

  

    return ( 
      <>
        {products && (
          <section id={id} className='wrapper'>
            <div id="" className='top-bar flex justify-between px-8'>
              <div id="" className='title'>
                  <h1 className='uppercase text-xl'>{genre.toUpperCase()}</h1>
              </div>
              <Link to={`/collections?genre=${genre}`}>View all</Link>
            </div>
            
            {/* <div id="" className="slide grid lg:grid-cols-4 md:grid-cols-2"> */}
            <div id="" className="slide flex overflow-x-scroll lg:grid lg:grid-cols-4">
    
              { products.map((item, i) => (
                  <ProductCard product={item} key={i} />
                ))
              }
            </div>
          </section>
        )}
      </>
    );
}

export default RenderCards;