import * as gameOttContants from '../contants/gameOanTuTi'
export const actPlay = ()=>({
        type : gameOttContants.playGame
})
export const actChange = (item)=>({
    type: gameOttContants.changeImg,
    item
})