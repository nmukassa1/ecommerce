import {Link} from 'react-router-dom'

function ProductCard({product, i}) {
    return ( 
        <Link to={`/product?name=${product.title}`} className="product-card grow shrink-0 basis-[160px] border-solid border border-black grow shrink-0">

          <div className="book-img w-full border-solid border border-black py-5 bg-[#F7F7F7]">
            <img src={product.img} alt="" className="product-card__img w-3/4 h-full object-contain mx-auto aspect-ratio-[.8]"/>
          </div>


          <div id="" className={`book-info p-3 ${product.quantity === 0 ? `line-through` : ''}`}>
              <div id="book-title">
                <h1 className='overflow-y-scroll'>{product.title}</h1>
              </div>
              <div className="book-price">
                <span>£{product.price}</span>
              </div>
          </div>
          
        
        </Link>
     );
}

export default ProductCard;