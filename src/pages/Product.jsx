import { useSearchParams } from 'react-router-dom';
import catalog from '../product-catalog.json';
import { useEffect, useState } from 'react';
import ProductPageImage from '../components/ProductPage/ProductPageImage';
import ProductPageInfo from '../components/ProductPage/ProductPageInfo';

function ProductPage() {
    const [searchParams] = useSearchParams(); // Getting URL search parameters
    const [product, setProduct] = useState(); // State to store the product
    const [queryExist, setQueryExist] = useState(false); // State to store the product
    
    useEffect(() => {
        const name = searchParams.get('name'); // Getting the 'name' parameter from URL
        const product = catalog.books.filter((item) => {return item.title === name})

        if (product) {
            setProduct(product[0]);
            setQueryExist(true);
        } else {
            setQueryExist(false);
            setProduct(null); // Reset product if no match found
        }
    }, [searchParams]); // Run the effect when searchParams change

    return (
        <>
            {queryExist && (
                <div id='product-page'>
                    <div className="product-page-container">
                        <ProductPageImage img={product.img} />
                        <ProductPageInfo data={product} />
                    </div>
                </div>
            )}
        </>
    );
}

export default ProductPage;
