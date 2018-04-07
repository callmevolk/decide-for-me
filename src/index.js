//React dependencies
import React from 'react';
import ReactDOM from 'react-dom';

//Context
import MyProvider from './state/MyProvider';

//global stylesheet
import './index.css';

//main App component
import App from './App';

const Index = () => (
  <MyProvider>
    <App />
  </MyProvider>
);

ReactDOM.render(<Index />, document.getElementById('app'));
