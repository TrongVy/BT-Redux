import React, { Component } from 'react'
import data from './danhSachGhe.json'
import HangGhe from './HangGhe';
export default class ManHinh extends Component {
    // da ta gồm 11 Object : khi dùng map lặp qua data thì tương ứng với 11 component HangGhe, khi đó t truyền 1 object (hangGhe) vào component 
    renderHangGhe() {
        return data.map((hangGhe, index) => {
            return (
                <div key={index}>
                        <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            )
        })
    }


    render() {
        console.log(data);
        return (
            <div className="manHinhA">
                <h1 className=" text-center">Bai Tap Dat Ve Xem Phim</h1>
                <div className="manHinhB text-light">
                    <p className="text-center ">Man Hinh</p>
                    <div className="screenTest mb-2"></div>
                    <div className="manHinhC ">
                           {this.renderHangGhe()} 
                    </div>
                </div>
            </div>
        )
    }
}
