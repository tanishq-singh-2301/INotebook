import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import Home from '@/views/Home';
import Home from './views/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
