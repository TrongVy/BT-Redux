import React, { Component } from 'react'

export default class ThongTinDatGhe extends Component {
    render() {
        return (
            <div className="mt-2">
                <div>
                    <button className="gheDuocChon"></button>
                    <span className="text-light mb-5 ml-2" style={{ fontSize: "20px" }}>
                        Ghe Da Dat
                    </span>
                </div>
                <div>
                    <button className="gheDangChon"></button>
                    <span className="text-light mb-5 ml-2" style={{ fontSize: "20px" }}>
                        Ghe Dang Dat
                    </span>
                </div>
                <div>
                    <button className="ghe ml-0"></button>
                    <span className="text-light mb-5 ml-2" style={{ fontSize: "20px" }}>
                        Ghe Chua Dat
                    </span>
                </div>
                <div className="mt-1">
                    <table className="table text-light" border="2" >
                        <thead>
                            <tr style={{ fontSize: "25px" }}>
                                <th>So Ghe</th>
                                <th>Gia</th>
                                <th>Huy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>so ghe</td>
                                <td>gia</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
