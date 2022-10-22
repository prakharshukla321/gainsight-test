import { useRef } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import FormInput from '../FormInput';

const AuthenticationForm = ({
  label,
  name,
  handleSubmit
}) => {
  const inputRef = useRef(null);

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputRef.current.value.length > 0) {
      handleSubmit({ key : inputRef.current.value });
    } else {
      toast.error('Enter valid access key');
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <FormInput ref={inputRef} name={name} label={label} />
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
