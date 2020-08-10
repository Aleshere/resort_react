import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {RoomProvider} from './context';


ReactDOM.render(
    <RoomProvider>
      <Router basename='/resort_react'>
        <App />
      </Router>
    </RoomProvider>
  ,  document.getElementById('root')
);


serviceWorker.unregister();
