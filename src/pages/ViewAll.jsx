import {useParams} from 'react-router-dom'
import RenderCards from '../components/Global/RenderCards';
import Loading from './Loading'
import useBookDatabase  from '../useBookDatabase';

function ViewAll() {

    const param = useParams();
    const {id, type} = useParams()
    
    const {books} = useBookDatabase();


    return ( 
        <>
            {books && <RenderCards data={books} title={id} id={id} type={type} genreName={id}/>}
            {!books && <Loading />}
        </>
    );
}

export default ViewAll;