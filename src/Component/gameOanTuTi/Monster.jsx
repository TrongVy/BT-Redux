import React, { Component } from 'react'
import { connect } from 'react-redux'
class Monster extends Component {
    render() {
        const {image} = this.props;
        // console.log("image",image);
        return (
            <div className="monster">
                <div className="chon">
                    <img width={100} height={100}
                     src={image.image}alt="" />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    image: state.gameReducerOtt.monsterImage
})
export default connect(mapStateToProps)(Monster)