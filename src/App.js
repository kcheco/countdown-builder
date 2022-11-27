import React from 'react';
import { AppTitle, TimerContainer } from './components';
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <AppTitle />
        <TimerContainer />
      </div>
    </div>
  );
};

export default App;
