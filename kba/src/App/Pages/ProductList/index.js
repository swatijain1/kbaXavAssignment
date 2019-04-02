import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'

import { Product } from '../../Components'
import productList from '../../Constants/productData'
import { addToCart } from '../../Actions/cart'

class ProductList extends Component {
    render() {
        const { cart: { cart:shoppingCart}, addToCart } = this.props

        const products = productList.map(product => (
            <Col key={`product-${product.id}`}>
                <Product product={product} cart={shoppingCart} addToCart={addToCart} />
            </Col>
        ))

        let list = []
        for(let i=0; i<products.length;i=i+4) {
            list.push(<Row key={`row-${i}`}>
                {products[i]}
                {products[i+1]}
                {products[i+2]}
                {products[i+3]}
            </Row>)
        }

        return (
            <Container>
                {list}
            </Container>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product))
})

const mapStateToProps = ({ cart }) => ({
    cart
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
