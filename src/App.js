import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

// Routes
import Routes from './Routes';

// Store Configuration
import createStore from './store';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body {
    font-family: Gilory, sans-serif;
  }
`;

const STORE = createStore();

const App = () => {
  return (
    <Provider store={STORE}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  );
};

export default App;
