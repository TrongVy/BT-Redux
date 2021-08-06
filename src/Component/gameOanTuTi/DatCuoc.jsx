import React, { Component } from 'react'
import { connect } from 'react-redux'
class DatCuoc extends Component {
    render() {
        const {soBanThang,soBanChoi} = this.props;
        return (
            <div className="mt-5">
                <h2>So Ban Thang :<span style={{color:'red'}}>{soBanThang}</span> </h2>
                <h2>So Ban Choi :<span style={{color:'yellow'}}>{soBanChoi}</span> </h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
        soBanThang : state.gameReducerOtt.soBanThang,
        soBanChoi : state.gameReducerOtt.soBanChoi,
})
export default connect(mapStateToProps)(DatCuoc)