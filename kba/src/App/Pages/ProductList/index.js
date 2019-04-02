import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from 'react-redux'
import Header from '../../Components/Header'
import Product from '../../Components/Product'
import productList from '../../Constants/productData'

class ProductList extends Component {
    render() {
        const products = productList.map(product => (
            <Col key={`product-${product.id}`}>
                <Product product={product} />
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

        return [
            <Header key="header" />,
            <Container key="container">
                {list}
            </Container>
        ]
    }
}

const mapDispatchToProps = () => ({

})

const mapStateToProps = () => ({
    
})
export default connect(mapStateToProps, mapDispatchToProps)(ProductList)