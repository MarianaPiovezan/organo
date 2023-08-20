import './Card.css';
import { PropTypes } from 'prop-types';

export const Employee = ({name, proffession, image, backgroundColor}) => {
   

    return (
    <div className='employee'> 
        <div className='header' style={{ backgroundColor: backgroundColor}}>
            <img src={image} alt={name}/>
        </div>
        <div className='footer'>
            <h4>{name}</h4>
            <h5>{proffession}</h5>
        </div>
    </div>
    )
}

Employee.propTypes = {
    name: PropTypes.string,
    proffession: PropTypes.string,
    image: PropTypes.string,
    backgroundColor: PropTypes.string,
}