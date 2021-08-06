import React, { Component } from 'react'
import DatCuoc from './DatCuoc'
import './gameOanTuTi.css'
import IronMan from './IronMan'
import Monster from './Monster'
import { connect } from 'react-redux'
import {actPlay} from '../../store/actions/gameOanTuTi'
class GameOanTuTi extends Component {
    render() {
        return (
            <div className="Game  text-center">
                <div className="container">
                    <h1>I'm Iron Man I Love You 3000</h1>
                </div>
                <div className="row mt-5 content">
                    <div className="col-4 content">
                        <IronMan />
                    </div>
                    <div className="col-4">
                        <DatCuoc />
                    </div>
                    <div className="col-4">
                        <Monster />
                    </div>
                </div>
                <button className="btn btn-primary"
                    onClick={() => this.props.play()}
                >Play Game</button>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    play: () => {
        dispatch(actPlay())
    }
})
export default connect(null, mapDispatchToProps)(GameOanTuTi)
