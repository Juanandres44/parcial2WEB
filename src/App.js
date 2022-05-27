import React from 'react';
import Espacios from './components/espacios';
import { FormattedMessage } from 'react-intl';


function App() {
  return (
    <div className="container mt-4">
      <h1><FormattedMessage id="Spaces"/></h1>
      <Espacios />
    </div>
  );
}

export default App;
