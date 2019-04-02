import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import pages from './Pages'
import './style.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' exact component={pages.ProductList} />
      </Router>
    )
  }
}

export default App;
