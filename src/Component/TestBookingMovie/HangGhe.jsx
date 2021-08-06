import React, { Component } from 'react';
import { connect } from 'react-redux';
class HangGhe extends Component {
    //  hangGhe la da ta truyen ManHinh.jsx truyen vao hangGhe = 1 object thuoc 1 trong 11 Object cua data
    renderSoGhe() {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let viTri = this.props.list.findIndex((item) => {
                return item.soGhe === ghe.soGhe
            })
        
            return (
                <button key={index}
                    className={(ghe.daDat === false ? "ghe" : "ghe daDat") +(viTri !== -1 ? " dangChon" : "") }
                    onClick={() => this.props.datGhe(ghe)}
                >{ghe.soGhe}</button>
            )
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button key={index} className="Ghe">{hang.soGhe}</button>
            )
        })
    }

    renderList = () => {
        //soHangGhe === 0 : Object [0] tuong ung voi index 0,ma soHangGhe={index}
        if (this.props.soHangGhe === 0) {
            return (
                <div className="hangDau">
                    {this.props.hangGhe.hang}    {this.renderSoHang()}
                </div>
            )

        } else {
            return (
                <div>
                    {this.props.hangGhe.hang} {this.renderSoGhe()}
                </div>
            )
        }
    }
    render() {
        // console.log(this.props.list);
        return (
            <div className="ml-5">
                {this.renderList()}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.listGheReducer.list
})
const mapDispatchToProps = (dispatch) => ({
    datGhe: (ghe) => {
        dispatch({
            type: "Dat_Ghe_Xem_Phim",
            ghe
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)