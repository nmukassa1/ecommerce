import { useSearchParams } from 'react-router-dom';
import catalog from '../product-catalog.json';
import { useEffect, useState } from 'react';
import ProductPageImage from '../components/ProductPage/ProductPageImage';
import ProductPageInfo from '../components/ProductPage/ProductPageInfo';

function ProductPage() {
    const [searchParams] = useSearchParams(); // Getting URL search parameters
    const [queryExist, setQueryExist] = useState(false); // State to track if query exists
    const [product, setProduct] = useState(); // State to store the product
    
    // Flatten the nested array in the catalog
    const fullCatalog = Object.values(catalog)
        .flatMap(element => Object.values(element.genre))
        .flat();
    
    useEffect(() => {
        const name = searchParams.get('name'); // Getting the 'name' parameter from URL
        const productExist = fullCatalog.find(item => item.title === name);

        if (productExist) {
            setProduct(productExist);
            setQueryExist(true);
        } else {
            setQueryExist(false);
            setProduct(null); // Reset product if no match found
        }
    }, [searchParams]); // Run the effect when searchParams change

    return (
        <>
            {queryExist && (
                <div id='product-section' className='h-full relative grid md:grid-cols-2'>
                    <ProductPageImage img={product.img} />
                    <ProductPageInfo data={product} />
                </div>
            )}
        </>
    );
}

export default ProductPage;
