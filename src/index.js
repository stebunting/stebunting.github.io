import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import CV from './CV';
import About from './About';

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/about" component={About} />
    <Route path="/cv" component={CV} />
  </BrowserRouter>,
  document.getElementById('root')
);
