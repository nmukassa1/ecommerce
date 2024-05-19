import { useSearchParams } from 'react-router-dom';
import catalog from '../product-catalog.json';
import ProductCard from '../components/Global/ProductCard';
import { useEffect, useState } from 'react';

function Collections() {
    const [searchParams] = useSearchParams(); // Getting URL search parameters
    const [products, setProducts] = useState([]); // State to store products
    const [queryExist, setQueryExist] = useState(false); // State to track if query exists
    const [title, setTitle] = useState();

    //Query Oprions: Genre, Author, Type
    // E.g Fantasy, Jk Rowling, Fiction
    const genreQuery = searchParams.get('genre')
    const authorQuery = searchParams.get('author')
    const typeQuery = searchParams.get('type')


    useEffect(() => {
        //Filter catalog based on query
        getProducts()
    }, [searchParams])
    

    function getProducts(){
        let products = [];
        if(genreQuery){
            products = catalog.books.filter((item) => { return item.genre === genreQuery.toLowerCase()})
            setTitle(genreQuery)
        } else if(authorQuery){
            products = catalog.books.filter((item) => { return  item.author.includes(authorQuery)})
            setTitle(authorQuery)
        } else if(typeQuery) {
            products = catalog.books.filter((item) => { return item.type === typeQuery.toLowerCase()})
            setTitle(typeQuery.replace('-', ' ').toUpperCase())
        } else { 
            products = catalog.books
            setTitle('Collections')
        }
        setProducts(products)
    }

    return ( 
        <div>
            <p id="collection-page-intro">An assortment of {title && (title.charAt(0).toUpperCase() + title.slice(1).toLowerCase())} books.</p>

            <div className='grid lg:grid-cols-4 grid-cols-2'>
                {products.map((item, index) => (
                    <ProductCard key={index} product={item}/> 
                ))}
            </div>
        </div>
     );
    }

export default Collections;
