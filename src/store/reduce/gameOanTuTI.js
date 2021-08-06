import * as gameOttContants from '../contants/gameOanTuTi'

const initialState = {
    imgAction: {},
    monsterImage:{ id: '', image: '' },
    soBanThang : 0,
    soBanChoi : 0,
    ketQua :'',
}

const gameReducerOtt = (state = initialState, action) => {
    const { type,item } = action;
    switch (type) {
        case gameOttContants.changeImg: {
            // console.log(action.item)
          let  imgActionUpdate = {...state.imgAction};    
          imgActionUpdate =item;
          state.ketQua = item.id;
          console.log(state.ketQua)
            return { ...state,imgAction:imgActionUpdate }
        }
        case gameOttContants.playGame: {
            console.log(item)
            let number =  Math.floor(Math.random() * 3)+1;
            let imgRandom ={...state.monsterImage}
            imgRandom.image =`./image-game_oan_tu_ti/${number}.png`;
            imgRandom.id = number;
            console.log(imgRandom)
            state.soBanChoi +=1;
            if( imgRandom.id===state.ketQua){
                console.log("ban da thang");
                state.soBanThang +=1;
            } else{
                console.log('ban thua roi!');
            }
            return { ...state,monsterImage: imgRandom}
        }
        default: {
            return { ...state }
        }
    }

}
export default gameReducerOtt;