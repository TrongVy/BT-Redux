import React, { Component } from 'react'
import { connect } from 'react-redux'
class DanhSachGhe extends Component {
    render() {
        const { list } = this.props
        return (
            <div>
                <h1 style={{ fontSize: "28px" }}>Danh Sach Ghe Ban Chon</h1>
                <div>
                    <table className="table text-light">
                        <thead>
                            <tr>
                                <th>So Ghe</th>
                                <th>Gia</th>
                                <th>Huy</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{item.soGhe}</td>
                                        <td>{item.gia}</td>
                                        <td>
                                            <button onClick ={()=>this.props.huy(item.soGhe)} className="btn btn-danger">Huy</button>
                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td >tong tien</td>
                                <td>{list.reduce((tong, item) => {
                                    return tong += item.gia;
                                }, 0)}</td>
                                <td></td>
                            </tr>
                        </tfoot>

                    </table>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.listGheReducer.list
})
const mapDispatchToProps = (dispatch) => ({
        huy : (soGhe)=>{
            dispatch({
                type : "Huy_Dat_Ve",
                soGhe
            })
        }
})
export default connect(mapStateToProps,mapDispatchToProps)(DanhSachGhe)
