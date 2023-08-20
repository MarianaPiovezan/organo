import './TextInput.css';
import { PropTypes } from 'prop-types';

export const TextInput = (props) => {
    return (
    <div className="input-text">
        <label htmlFor="">{props.label}</label>
        <input value={props.value} onChange={ event => props.onChange ( event.target.value)} required={props.required} type="text" placeholder={props.placeholder} />
    </div>
    )
}

TextInput.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
}