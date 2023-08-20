import { PropTypes } from 'prop-types';
import './Select.css'

export const Select = (props) => {
    return (
        <div className='select'>
            <label>{props.label}</label>
            <select value={props.value}
            onChange={ event => props.onChange( event.target.value)} required={props.required} name="" id="">
                {props.itens.map( item => <option key={item}> {item}</option>)}
            </select>
        </div>
    )
}

Select.propTypes = {
    label: PropTypes.string,
    itens: PropTypes.array,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string

}