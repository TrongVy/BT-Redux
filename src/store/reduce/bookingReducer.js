const initialState = {
    danhSachGheDangDat: [
        // {soGhe,Gia}
    ]
}
const bookingReducer = (state = initialState, action) => {
    const { type, ghe } = action;
    switch (type) {
        case "Dat_Ghe": {
            console.log(action.ghe);
            let dsgUpdate = [...state.danhSachGheDangDat];
            let index = dsgUpdate.findIndex((item) => {
                return item.soGhe === ghe.soGhe
            })
            //khi nguoi dung click,neu ghe co trong mang thi remove di,neu ghe chua co trong mang thi them vao
            if (index !== -1) {
                dsgUpdate.splice(index, 1);
            } else {
                dsgUpdate.push(ghe)
            }
            console.log("DSG", dsgUpdate)
            //cap nhat lai state de giao dien render lai
            return { ...state, danhSachGheDangDat: dsgUpdate };
        }
        default: {
            return { ...state }
        }
    }
}
export default bookingReducer;