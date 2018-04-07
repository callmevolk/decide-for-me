//React dependencies
import React from 'react';

//Material UI
import AppBar from 'material-ui/AppBar';
import {indigo400} from 'material-ui/styles/colors';

//stylesheet
import './Header.css';

//component
const header = () => {
  return (
    <header>
      <AppBar
        style={{textAlign: 'center', backgroundColor: indigo400}}
        title={<span>Decide for me</span>}
        iconElementLeft={
          <a href="https://github.com/siberianLvolk/decide-for-me" className="github-link">
            <i className="material-icons material-icons-git">code</i>
          </a>
        }
      />
    </header>
  );
};

//default export
export default header;