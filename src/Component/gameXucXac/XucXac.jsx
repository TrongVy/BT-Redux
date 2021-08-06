import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {
    render() {
        // console.log(this.props.listXucXac);
        const { listXucXac } = this.props;
        return (
            <div>
                {listXucXac.map((item, index) => {
                    return (
                        <img key={index} height={50} width={50} src={item.image} alt="" />
                    )
                })}

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    listXucXac: state.gameReducer.listXucXac
})
export default connect(mapStateToProps)(XucXac)
