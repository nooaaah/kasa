import '../styles/Card.scss'
import { Link } from 'react-router';

function Card({ data }) {




    return (
        <div className='Card'>
            <Link to={`/Logement/${data.id}`}>
                <img src={data.cover} className='CardImg' />
            </Link>
            <p className='CardP'>{data.title}</p>
        </div>
    )
}








export default Card