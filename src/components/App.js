import React, { useState } from 'react';
import Form from './Form';
import LangSwitcher from './LangSwitcher';
import './App.css';
import { AppContext } from '../helpers';

function App() {
  const [language, setLanguage] = useState('en');
  const [message, setMessage] = useState('');
  return (
    <AppContext.Provider value = {{
      language,
      message,
      setLanguage,
      setMessage
    }}>
      <div className="App">
        <div className={"message"} style={(message ? {} : {display: 'none'})}>
          <h1>{message}</h1>
        </div>
        <LangSwitcher />
        <Form />
      </div>
    </AppContext.Provider>
  );
}

export default App;
