import { useRef, useState, useEffect } from 'react';
import AuthenticationForm from './components/AuthenticationForm';
import CommitHistory from './components/CommitHistory';
import { ToastContainer } from 'react-toastify';
import SessionStorageHandler from './utils/sessionStorageHandler';
import api from './api';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [personalKey, setPersonalKey] = useState('');
  const sessionHandlerRef = useRef(null);

  useEffect(() => {
    const sessionStorage = new SessionStorageHandler('github_personal_access_key');
    sessionHandlerRef.current = sessionStorage;
    const accessKey = sessionStorage.get();
    if (accessKey) {
      setPersonalKey(accessKey);
    }
  }, []);

  useEffect(() => {
    const { current: sessionStorage } = sessionHandlerRef;
    if (sessionStorage && personalKey) {
      sessionStorage.set(personalKey);
      api.setup(personalKey);
    }
  }, [personalKey]);

  return (
    <>
      {!personalKey ? (
        <AuthenticationForm
          name="accessKey"
          label="Personal Access Key"
          handleSubmit={({ key }) => {
            if (key.length > 0) setPersonalKey(key);
          }}
        />
      ): (
        <CommitHistory accessKey={personalKey} />  
      )}
      <ToastContainer />
    </>
  )
}

export default App;
