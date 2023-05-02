import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './componets/Greeting';
import store from './Redux/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Greeting />
      </Router>
    </Provider>
  );
}

export default App;
