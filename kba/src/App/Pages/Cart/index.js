import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { CartProduct } from '../../Components'
import { updateCart, removeProduct } from '../../Actions/cart'

import './style.scss'

class Cart extends Component {
    render() {
        const { cart: { cart:shoppingCart, totalItems, totalPrice }, updateCart, removeProduct, history } = this.props
        
        if(!shoppingCart.length) {
            history.push('/')
        }
        const products = shoppingCart.map(product => (
            <CartProduct key={`cart-product-${product.id}`} product={product} updateCart={updateCart} removeProduct={removeProduct} />
        ))

        return (
            <Container>
                {products}
                <hr />
                <Row className="total">
                    <Col>Total</Col>
                    <Col>Total Quantity: {totalItems}</Col>
                    <Col>Total Price: {totalPrice}</Col>
                </Row>
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    updateCart: (product) => dispatch(updateCart(product)),
    removeProduct: (product) => dispatch(removeProduct(product))
    
})

const mapStateToProps = ({ cart }) => ({
    cart
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
