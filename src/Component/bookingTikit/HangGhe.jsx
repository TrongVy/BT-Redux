import React, { Component } from 'react';
import { connect } from 'react-redux';
class HangGhe extends Component {
    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {

            let cssGheDaDat = '';
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon'
            }
            let viTri = this.props.danhSachGheDangDat.findIndex((gheDaDat)=>{
                return gheDaDat.soGhe === ghe.soGhe
            })
            let cssDaDat = '';
            if(viTri !== -1) {
                cssDaDat ="dangChon"
            }
            // console.log('index',viTri);
            return (
                <button onClick={()=>this.props.datGhe(ghe)} className={`ghe ${cssGheDaDat} ${cssDaDat} ` } key={index}>
                    {ghe.soGhe}
                </button>
            )
        })
    }

    renderSoHang = () => {
        return this.props.hangGhe.danhSachGhe.map((hang, index) => {
            return (
                <button key={index} className="rowNumber "

                >{hang.soGhe} </button>
            )
        })
    }

    renderHangGhe = () => {
        if (this.props.soHangGhe === 0) {
            return (
                <div>
                    {this.props.hangGhe.hang}{this.renderSoHang()}
                </div>
            )
        } else {
            return (
                <div>
                    {this.props.hangGhe.hang}{this.renderGhe()}
                </div>
            )
        }

    }
    render() {
        // console.log(this.props.danhSachGheDangDat)
        return (
            <div className="text-light">
                <p style={{ fontSize: '20px' }}>   {this.renderHangGhe()}</p>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    danhSachGheDangDat: state.bookingReducer.danhSachGheDangDat
})
const mapDispatchToProps = (dispatch) => ({
    datGhe : (ghe)=>{
        dispatch({
            type : "Dat_Ghe",
            ghe
        })
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)