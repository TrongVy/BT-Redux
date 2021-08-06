import React, { Component } from 'react'
import './booking.css'
import ManHinh from './ManHinh'
import DanhSachGhe from './DanhSachGhe.jsx'

export default class BookingTest extends Component {
    render() {
        return (
            <div className="testBooking">
                    <div className="bookingA ">
            <div className="container-fluid">
                    <div className="row">
                        <div className="col-8">
<ManHinh/>
                        </div>
                        <div className="col-4">
<DanhSachGhe/>
                        </div>
                    </div>
            </div>
                    </div>
            </div>
        )
    }
}
