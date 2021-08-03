import React, { Component } from 'react'
import {connect} from 'react-redux'
import {actAddToShoppingList } from '../store/actions/shoppingAction'
 class Product extends Component {
    render() {
        const { product,addProduct } = this.props;
        return (
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" height={300} width={300} src={product.hinhAnh} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.describe}</p>
                    </div>
                    <button className="btn btn-success"
                    onClick={()=>addProduct(product)}
                    >Add To Card</button>
                </div>
            </div>

        )
    }
}
// const mapDispatchToProps =(dispatch) => {
//     return{
//         addProduct: (product)=>{
//             dispatch(addProduct(product));
//         }
//     }
// }
const mapDispatchToProps =(dispatch) =>({
        addProduct: (product)=>{
        dispatch(actAddToShoppingList (product));
    }
})
export default connect(null,mapDispatchToProps)(Product);
