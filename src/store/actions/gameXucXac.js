import * as gameContants from '../contants/gameXucXac'
export const actBtn= (click)=> ({
            type :gameContants.banChon,
            click
})
export const actPlay= ()=> ({
            type :gameContants.play
})