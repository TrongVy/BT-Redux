import React, { Component } from 'react'
import Product from './Product'

export default class ShoppingList extends Component {
    render() {
        const { ProductList } = this.props;
        // console.log(ProductList);
        return (
            <div className="row">
                {ProductList.map((product, index) => {
                    return (
                        <Product product={product} key={index}/>
                    )
                })}
            </div>
        )
    }
}
