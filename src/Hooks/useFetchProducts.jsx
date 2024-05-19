import { useState, useEffect } from "react";
import catalog from '../product-catalog.json'

function useFetchProducts() {
    const [collection, setCollection] = useState();

    useEffect(() => {
        fetch(catalog)
            .then((res) => res.json())
            .then((data) => setCollection(data))
            .catch((err) => console.error(err));
    }, []);

    return { collection };
}

export default useFetchProducts;
