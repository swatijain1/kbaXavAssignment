import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import pages from './Pages'
import { Header } from './Components'
import './style.scss';

class App extends Component {
  render() {
    const { cart: { totalItems } } = this.props

    return (
      <Router>
        <Header key="header" totalItems={totalItems} />
        <Route path='/' exact component={pages.ProductList} />
        <Route path='/product-list' exact component={pages.ProductList} />
        <Route path='/cart' exact component={pages.Cart} />
      </Router>
    )
  }
}


const mapStateToProps = ({ cart }) => ({
  cart
})

export default connect(mapStateToProps)(App)
