import React from 'react';
import PropTypes from 'prop-types';
import './FormInputStyles.scss';

const FormInput = React.forwardRef(({
  name,
  label,
  type,
  ...otherProps
}, ref) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input ref={ref} type={type} id={name} name={name} {...otherProps} />
    </>
  )
});

export default FormInput;

FormInput.defaultProps = {
  type: 'text'
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string
}
