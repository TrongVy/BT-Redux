import React, { Component } from 'react'
import { connect } from 'react-redux'
class KetQua extends Component {
    render() {
        const { banChon, tong, banThang } = this.props
        return (
            <div className="mt-5">
                <h3>Ban Chon : <span style={{ color: 'red' }}> {banChon === '' ? '' : banChon === true ? 'Tai' : 'Xiu'}</span></h3>
                <h3>So Ban Thang : <span style={{ color: 'yellow' }}>{banThang}</span></h3>
                <h3>Tong So Ban Choi : <span style={{ color: 'green' }}>{tong}</span></h3>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    banChon: state.gameReducer.banChon,
    tong: state.gameReducer.tongSoBanChoi,
    banThang: state.gameReducer.soBanThang
})
export default connect(mapStateToProps)(KetQua)
