import * as shoppingContants from '../contants/shoppingContant'
export const actAddToShoppingList  = (product) =>({
    type:shoppingContants.addProduct,
    product
})
export const actDeleteProduct = (id) =>({
    type:shoppingContants.deleteProduct,
    id
})
export const actTangGiam = (id,tangGiam) =>({
    type:shoppingContants.actTangGiam,
    id,
    tangGiam
})
