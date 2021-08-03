import React, { Component } from 'react'
import { connect } from 'react-redux'
import {actDeleteProduct,actTangGiam}from '../store/actions/shoppingAction'
class Modal extends Component {
    renderTable() {
        const {shoppingList,deleteProduct,tangGiamSL} = this.props;
        return shoppingList.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>
                        <button className="btn btn-primary" onClick={() => tangGiamSL(product.id,true)}>+</button>
                        {product.soLuong}
                        <button className="btn btn-primary"  onClick={() => tangGiamSL(product.id,false)}>-</button>
                    </td>
                    <td>{product.price}</td>
                    <td>
                        <img height={50} width={50} src={product.hinhAnh} alt="" />
                    </td>
                    <td>{product.soLuong * product.price}</td>
                    <td>
                        <button onClick= {()=>deleteProduct(product.id)} className="btn btn-danger">Xoa</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div>
                <div>

                    <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content" style={{ width: 700 }}>
                                <div className="modal-header">
                                    <h5 className="modal-title">Modal title</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    {/* Body */}
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>soLuong</th>
                                                <th>price</th>
                                                <th>hinhAnh</th>
                                                <th>Tong Tien</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderTable()}
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="5">Tong Tien</td>
                                                <td>{this.props.shoppingList.reduce((sum, product, index) => {
                                                    return sum += product.soLuong * product.price;
                                                }, 0)}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         shoppingList: state.shopReducer.shoppingList
//     }
// }
const mapStateToProps = (state) =>({
    shoppingList: state.shopReducer.shoppingList
})
const mapDispatchToProps = (dispatch) => ({
    tangGiamSL : (id,tangGiam) =>{
            dispatch(actTangGiam(id,tangGiam))
    },
    deleteProduct: (id)=>{
        dispatch(actDeleteProduct(id))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(Modal)