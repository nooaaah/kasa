import '../styles/Card.scss'
import logements from '../data/logements.json'

function Card () {




    return(
        
        logements.map((logements) => (
            <div key={logements.id} className='Card'>
                <img src={logements.cover} className='CardImg'/>
                <p className='CardP'>{logements.title}</p>
            </div>
        



    )


))}








export default Card