import *as gameContants from '../contants/gameXucXac'
const initialState = {
    listXucXac: [
        { diem: 1, image: './image/1.png' },
        { diem: 1, image: './image/1.png' },
        { diem: 1, image: './image/1.png' }
    ],
    banChon: '',
    soBanThang: 0,
    tongSoBanChoi: 0,
    ketQua: ''
}
const gameReducer = (state = initialState, action) => {
    const { type, click } = action;
    switch (type) {
        case gameContants.banChon: {
            // console.log(click)
            click === true ? state.banChon = true : state.banChon = false;
            return { ...state }
        }
        case gameContants.play: {
            let newList = [...state.listXucXac];
            let tongdiem = 0;
            for (let i = 0; i < state.listXucXac.length; i++) {
                let soxucxac = Math.floor(Math.random() * 6) + 1;
                newList[i].diem = soxucxac;
                newList[i].image = `./image/${soxucxac}.png`;
                tongdiem += soxucxac;
            }
            if (tongdiem % 2 === 0) {
                if (state.banChon) {
                    state.soBanThang += 1;
                    state.ketQua = "Ban Chon dung"
                } else {
                    state.ketQua = "Ban Chon Sai";
                }
            } else {
                if (!state.banChon) {
                    state.soBanThang += 1;
                    state.ketQua = "Ban Chon dung"
                } else {
                    state.ketQua = "Ban Chon Sai";
                }
            }
            state.tongSoBanChoi += 1;
            return { ...state, listXucXac: newList }
        }
        default: {
            return { ...state }
        }
    }
}
export default gameReducer;