import {useEffect, useState} from 'react'

function useFetch(url){

    

    const [data, setData] = useState(null);
    
    useEffect(() => {
        (async () => {
            const res = await fetch(url)
            const data = await res.json()
            setData(data)
        })() //Self calling async function 
    }, [])

    

    return {data}
}

export default useFetch