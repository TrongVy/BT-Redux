import React, { Component } from 'react'
import { connect } from 'react-redux'
import {actChange} from '../../store/actions/gameOanTuTi'
class IronMan extends Component {
    listImage = [
        { id: 1, name: 'bao', image: './image-game_oan_tu_ti/1.png' },
        { id: 2, name: 'bua', image: './image-game_oan_tu_ti/2.png' },
        { id: 3, name: 'keo', image: './image-game_oan_tu_ti/3.png' }
    ]
    render() {
        const { changeImg, imgAction } = this.props;
        // console.log("list", imgAction);
        return (
            <div className="ironMan">
                <div className="chon">
                    <img width={100} height={100} src={imgAction.image} alt="" />
                </div>
                <div className="hinh">
                    {this.listImage.map((item, index) => {
                        return (
                            <div key={index}>
                                <img onClick={() => changeImg(item)} width={80} height={80} src={item.image} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    imgAction: state.gameReducerOtt.imgAction
})
const mapDispatchToProps = (dispatch) => ({
    changeImg: (item) => {
        dispatch(actChange(item))
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(IronMan)