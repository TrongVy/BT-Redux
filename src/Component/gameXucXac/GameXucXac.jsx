import React, { Component } from 'react'
import KetQua from './KetQua'
import XucXac from './XucXac'
import './gameXucXac.css'
import { connect } from 'react-redux'
import { actBtn,actPlay } from '../../store/actions/gameXucXac'
class GameXucXac extends Component {
    render() {
        const { choose, banChon, play, ketQua } = this.props;
        return (
            <div className="game  text-center">
                <div className="container">
                    <div>
                        <h1>game xuc xac</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <button
                                className={banChon === true ? "btn btn-primary button__btn activity" : "btn btn-primary button__btn"}
                                onClick={() => choose(true)}
                            >Tai</button>
                        </div>
                        <div className="col-4">
                            <XucXac />
                        </div>
                        <div className="col-4">
                            <button className={banChon === false ? "btn btn-primary button__btn activity " : "btn btn-primary button__btn"}
                                onClick={() => choose(false)}
                            >Xiu</button>
                        </div>
                    </div>

                    <KetQua />
                    <button className="btn btn-success mt-5"
                        onClick={() => play()}
                    >Play game</button>
                    <p >ket qua: <span style={{ color: "red", fontSize: "30px" }}>{ketQua} </span></p>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    banChon: state.gameReducer.banChon,
    ketQua: state.gameReducer.ketQua,
})
const mapDispatchToProps = (dispatch) => ({
    choose: (click) => {
        dispatch(actBtn(click))
    },
    play: () => {
        dispatch(actPlay())
    }

})
export default connect(mapStateToProps, mapDispatchToProps)(GameXucXac)