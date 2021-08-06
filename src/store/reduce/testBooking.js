const initialState = {
    list: [

    ],
}
const listGheReducer = (state = initialState, action) => {
    const { type, ghe, soGhe} = action
    switch (type) {
        case "Dat_Ghe_Xem_Phim": {
            // console.log(action.ghe)
            let listUpdate = [...state.list];
            let index = listUpdate.findIndex((item) => {
                return item.soGhe === ghe.soGhe;
            })
            if (index !== -1) {
                listUpdate.splice(index, 1)
            } else {
                listUpdate.push(ghe)
            }
            // console.log(listUpdate)
            return { ...state, list: listUpdate }
        }
        case "Huy_Dat_Ve" : {
            console.log("huy",action.soGhe)
            let listUpdate = [...state.list];
            let index = listUpdate.findIndex((item) => {
                return item.soGhe === soGhe
            })
            if (index !== -1) {
                listUpdate.splice(index, 1)
            } else {
                listUpdate.push(ghe)
            }
            return { ...state, list: listUpdate }
        }
        default: {
            return { ...state }
        }
    }
}
export default listGheReducer;