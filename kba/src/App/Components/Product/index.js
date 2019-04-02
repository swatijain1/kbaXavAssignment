import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

import './style.scss'

class Product extends Component {
    state = {
        disableButton: false
    }
    addToCart = () => {
        const { product, addToCart } = this.props
        const productDetails = {
            ...product,
            quantity: 1,
            totalPrice: product.price
        }
        addToCart(productDetails)
    }
    
    static getDerivedStateFromProps(props, state) {
        const { cart, product } = props
        if(cart.filter(cartProduct => cartProduct.id === product.id).length && !state.disableButton) {
            return {disableButton: true}
        }
        return null;
    }
    
    render() {
        const { product:{ image, price, name }, cart } = this.props
        const { disableButton } = this.state
       
        return (
                <div className='product'>
                    <img src={image} alt='cannot load' />
                    <div className='description'>
                        <div>{name}</div>
                        <div>Price: Rs {price} </div>
                    </div>
                    <Button disabled={disableButton} variant="outline-success" onClick={this.addToCart}>Add to cart</Button>
                </div>
        )
    }
}

export default Product
