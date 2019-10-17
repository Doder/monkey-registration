import React, { useContext } from 'react';
import { AppContext } from '../helpers';
import './LangSwitcher.css';

const LangSwitcher = props => {
    const {setLanguage, language} = useContext(AppContext);
    return(
        <div className="languages">
          <img className="lang-flag" src="/en-icon.png" width="50px" onClick={() => setLanguage('en')}/>
          <img className="lang-flag" src="/hr-icon.ico" width="50px" onClick={() => setLanguage('hr')}/>
          <p>{language}</p>
        </div>
    );
};

export default LangSwitcher;