import Hero from '../components/HomePage/Hero';
import RenderCards from '../components/Global/RenderCards';
import catalog from '../product-catalog.json'


function Home() {

    return ( 
        <>
            <div className='page-height'>
                <Hero />
                <RenderCards data={catalog.books} genre='fantasy' renderAmount='4' id={'fantasy-section'} />
                <RenderCards data={catalog.books} genre='romance' renderAmount='4' id={'romance-section'} />
                <RenderCards data={catalog.books} genre='biography' renderAmount='4' id={'biography-section'} />
            </div>
        </>
    );
}

export default Home;