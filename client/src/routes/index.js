import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import layout
import Header from '../components/Layout/Header';

// Import Containers
import Home from './Home';
import About from './About';

// Contains all paths for Routes
const routes = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
);

export default routes;