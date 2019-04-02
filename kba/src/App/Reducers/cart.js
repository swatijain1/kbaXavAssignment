import { ACTIONS } from '../Constants'

const initialState = {
    cart : [],
    totalItem: 0,
    totalPrice : 0.00
}

export default (state=initialState, action) => {
    let { cart, totalItem, totalPrice } = state

    switch(action.type) {
        case ACTIONS.ADD_TO_CART: 
                cart.push(action.product)
                totalItem++
                totalPrice += action.product.price
                return { ...state, cart, totalItem, totalPrice }
        case ACTIONS.UPDATE_CART: 
                return { ...state, cart, totalItem, totalPrice }
        default: return state
    }
}