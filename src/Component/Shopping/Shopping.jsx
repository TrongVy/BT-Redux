import React, { Component } from 'react'
import Modal from './Modal';
import ShoppingList from './ShoppingList';
import { connect } from 'react-redux';

class Shopping extends Component {
    ProductList = [
        { id: 1, name: 'ao', soLuong: 1, price: 99, describe: "tre trung nang dong", hinhAnh: 'https://cf.shopee.vn/file/875423ac66e773f3bc8d7c485bbb65cd_tn' },
        { id: 2, name: 'quan', soLuong: 1, price: 300, describe: "gia ca yeu duoi", hinhAnh: 'https://cf.shopee.vn/file/f06a507aa0e91a498785b60bfe7a7659_tn' },
        { id: 3, name: 'giay', soLuong: 1, price: 299, describe: "giay trung quoc", hinhAnh: 'https://cf.shopee.vn/file/1746de023f7378d59eb2fd017da52f40' },
        { id: 4, name: 'ao khoac', soLuong: 1, price: 199, describe: "ao gio mua he", hinhAnh: 'https://cf.shopee.vn/file/d77d8b5b5ab6f33a500de137c5ade5fa', anhChiTiet1: 'https://cf.shopee.vn/file/8638b496d339cf5515e9fb4f80962e8b', anhChiTiet2: 'https://cf.shopee.vn/file/d77d8b5b5ab6f33a500de137c5ade5fa', anhChiTiet3: 'https://cf.shopee.vn/file/b308f0862048aa19f2fdc7f445fb12e2', anhChiTiet4: 'https://cf.shopee.vn/file/9528ce813445418349fbbfbed7a6343a' }
    ];
    render() {
        return (
            <div className="container">
                <div>
                    <button type="button" className="btn btn-primary btn-lg mb-5" data-toggle="modal" data-target="#modelId">
                        Gio Hang({this.props.shoppingList.length})
                    </button>
                    <Modal />
                </div>
                <div className="">
                    <ShoppingList ProductList={this.ProductList} />
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    shoppingList: state.shopReducer.shoppingList,
})
export default connect(mapStateToProps)(Shopping)