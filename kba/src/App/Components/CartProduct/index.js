import React, { Component } from 'react'
import { Button, Row, Col } from 'react-bootstrap'

import './style.scss'

class CartProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableButton: false,
            quantity: props.product.quantity,
            error: ''
        }
    }
    
    changeQuantity = (e) => {
        const quantity = +(e.target.value)
        if(quantity > 0 && quantity < 100000) {
            this.setState({
                quantity,
                error: '',
                disableButton:false
            })
        } else {
            this.setState({
                quantity,
                disableButton: true,
                error: 'Please enter quantity between 0-100000'
            })
        }
    } 

    updateQuantity = () => {
        const { quantity } = this.state;
        const { product, updateCart } = this.props;
        const productDetails = {
            ...product,
            quantity,
            totalPrice: quantity * product.price,
        }
        updateCart(productDetails)
    }
    
    removeProduct = () => {
        const { product, removeProduct } = this.props;
        removeProduct(product)
    }
    
    render() {
        const { image, price, name, totalPrice } = this.props.product
        const { disableButton, quantity, error } = this.state
        const computedPrice =  error ? (<div className="error">{error}</div>) 
                    : (<div>Total price :{quantity * price}</div>)

        return (
                <Row className='cart-product'>
                    <Col><img src={image} alt='cannot load' /></Col>
                    <Col>
                        <div>{name}</div>
                        <div>Price: Rs {price}</div>
                    </Col>
                    <Col>
                        <div>Quantity</div>
                        <div>
                            <input type="number" value={quantity} onChange={this.changeQuantity} />
                        </div>
                        {computedPrice}
                    </Col>
                    <Col>
                        <Button 
                            disabled={disableButton} 
                            variant="outline-success" 
                            onClick={this.updateQuantity}>Update
                        </Button>
                    </Col> 
                    <Col> Total Price: Rs {totalPrice} </Col>   
                    <Col>
                        <Button variant="outline-danger" onClick={this.removeProduct}>
                            <span aria-hidden="true">&times;</span>
                        </Button>
                    </Col>                
                </Row>
        )
    }
}

export default CartProduct
