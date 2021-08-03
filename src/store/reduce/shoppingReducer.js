
import * as shoppingContants from '../contants/shoppingContant'
const initialState = {
    shoppingList: []
}

const shopReducer = (state = initialState, action) => {
    const { type, product, id,tangGiam } = action;
    switch (type) {
        case shoppingContants.addProduct: {
            // console.log(product)
            let shoppingListUpdate = [...state.shoppingList];
            let index = shoppingListUpdate.findIndex(item => {
                return item.id === product.id;
            })
            if (index !== -1) {
                shoppingListUpdate[index].soLuong += 1;
            } else {
                shoppingListUpdate.push(product)
            }
            return { ...state, shoppingList: shoppingListUpdate }
        }
        case shoppingContants.deleteProduct: {
            let shoppingListUpdate = [...state.shoppingList];
            let index = shoppingListUpdate.findIndex(item => {
                return item.id === id;
            })
            shoppingListUpdate.splice(index, 1)
            return { ...state, shoppingList: shoppingListUpdate }
        }
        case shoppingContants.actTangGiam :{
            let shoppingListUpdate = [...state.shoppingList];
            let index = shoppingListUpdate.findIndex(item => {
                return item.id === id;
            })
            if(tangGiam){
                shoppingListUpdate[index].soLuong += 1;
            }else{
                if(shoppingListUpdate[index].soLuong >1){
                    shoppingListUpdate[index].soLuong -= 1;
                }
            }
            return { ...state, shoppingList: shoppingListUpdate }
        }
        default: {
            return { ...state }
        }
    }
}
export default shopReducer