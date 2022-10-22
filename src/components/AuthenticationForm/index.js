import { useRef } from 'react';
import PropTypes from 'prop-types';

const AuthenticationForm = ({
  label,
  name,
  handleSubmit
}) => {
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({ key: inputRef.current.value });
  }

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor={name}>{label}</label>
      <input ref={inputRef} type="text" id={name} name={name} />
      <button type="submit">Go</button>
    </form>
  )
}

export default AuthenticationForm;

AuthenticationForm.defaultProps = {
  handleSubmit: () => {}
}

AuthenticationForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func
}
