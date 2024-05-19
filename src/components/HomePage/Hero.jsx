import {Link} from 'react-router-dom'

function Hero() {
    return ( 
        <section id="hero" className=' h-[30vh] grid grid-cols-2 md:h-[50vh]'>
            <div id="fiction-hero" className='grid place-content-center grow'>
                <Link to="/collections?type=fiction" className='bg-black text-white px-3 py-2 hover:text-black hover:bg-white'>FICTION</Link>
            </div>
            <div id="non-fiction-hero" className='grid place-content-center grow'>
                <Link to="/collections?type=non-fiction" className='bg-black text-white px-3 py-2 hover:text-black hover:bg-white'>NON-FICTION</Link>
            </div>
        </section>
    );
}

export default Hero;