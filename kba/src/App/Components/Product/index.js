import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { addToCart } from '../../Actions/cart'
import './style.scss'

class Product extends Component {
    addToCart = () => {
        const { product, addToCart } = this.props
        const productDetails = {
            ...product,
            quantity: 1,
            totalPrice: product.price
        }
        addToCart(productDetails)
    }
    render() {
        const { image, price, name } = this.props.product

        return (
                <div className='product'>
                    <img src={image} alt='cannot load' />
                    <div className='description'>
                        <div>{name}</div>
                        <div>Price: Rs {price} </div>
                    </div>
                    <Button onClick={this.addToCart}>Add to cart</Button>
                </div>
        )
    }
}

  
const mapDispatchToProps = (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product))
})

const mapStateToProps = (state) => ({
    cart: state.cart
})

export default connect(mapStateToProps, mapDispatchToProps)(Product)