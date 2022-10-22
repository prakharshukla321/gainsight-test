import { useRef, useState, useEffect } from 'react';
import AuthenticationForm from './components/AuthenticationForm';
import SessionStorageHandler from './utils/sessionStorageHandler';

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
    if (sessionStorage) {
      sessionStorage.set(personalKey);
    }
  }, [personalKey]);

  if (!personalKey) {
    return (
      <AuthenticationForm
        name="name"
        label="Personal Access Key"
        handleSubmit={({ key }) => {
          if (key.length > 0) setPersonalKey(key);
        }}
      />
    );
  }

  return <div>Hello World</div>
}

export default App;
