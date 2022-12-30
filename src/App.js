import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Routes from './routes'
import './App.css';

const App = () => {


  return (
   
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
