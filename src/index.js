import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx'

//renderiza lo que tenemos dentro
ReactDOM.render(
  //toma el componente y lleva a root en index.html
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

