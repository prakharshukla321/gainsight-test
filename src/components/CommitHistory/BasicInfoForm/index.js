import { useState } from 'react';
import PropTypes from 'prop-types';
import FormInput from '../../FormInput';

const BasicInfoForm = ({
  handleSubmit
}) => {
  const [ owner, setOwner ] = useState('');
  const [ repo, setRepo ] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit({
      owner,
      repo,
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <FormInput name="repoOwner" label="Repo Owner" value={owner} onChange={(e) => setOwner(e.target.value)} />
      <FormInput name="repoName" label="Repo Name" value={repo} onChange={(e) => setRepo(e.target.value)} />
      <button type="submit">Fetch</button>
    </form>
  )
}

export default BasicInfoForm;


BasicInfoForm.defaultProps = {
  handleSubmit: () => {}
}

BasicInfoForm.propTypes = {
  handleSubmit: PropTypes.func
}
