import { Employee } from '../Card';
import './Team.css';
import { PropTypes } from 'prop-types';

export const Team = (props) => {
    return (
       (props.employees.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>

            <div className='employees'>
                {props.employees.map(employee => <Employee
                    key={employee.name}
                    backgroundColor={props.primaryColor}
                    name={employee.name}
                    proffession={employee.proffession}
                    image={employee.image} />)}
            </div>
        </section>
    : ""
    )
}

Team.propTypes = {
    name: PropTypes.string,
    primaryColor: PropTypes.string,
    secondaryColor: PropTypes.string,
    employees: PropTypes.array,
}



