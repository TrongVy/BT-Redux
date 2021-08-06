import React, { Component } from 'react'
import './booking.css'
import ThongTinDatGhe from './ThongTinDatGhe'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe'
export default class BookingTikit extends Component {
    renderGhe = () => {
        return data.map((hangGhe, index) => {
            return (
                <div className="" key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index} />
                </div>
            )
        })
    }
    render() {
        console.log(data);
        return (
            <div className="booking">
                <div className="backGround ">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-8">
                                <h1 className="text-warning text-center mt-0">
                                    Bai Tap Dat Ve Xem Phim
                                </h1>
                                <div className="B"><p>man hinh</p></div>
                                <div className="A">

                                    <div className="screen">
                                   
                                    </div>
                                    {this.renderGhe()}
                                </div>

                            </div>
                            <div className="col-4">
                                <h1 className="text-blue text-center mt-0">
                                    Danh Sach Ghe Ban Chon
                                </h1>
                                <ThongTinDatGhe />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
