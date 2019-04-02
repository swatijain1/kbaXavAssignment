import { ACTIONS } from '../Constants'

const initialState = {
    cart : [],
    totalItems: 0,
    totalPrice : 0.00
}

export default (state=initialState, action) => {
    let { cart, totalItems, totalPrice } = state

    switch(action.type) {
        case ACTIONS.ADD_TO_CART: 
                cart.push(action.product)
                totalItems++
                totalPrice += action.product.totalPrice
                return { ...state, cart, totalItems, totalPrice }
        case ACTIONS.UPDATE_CART:
                const foundIndex = cart.findIndex(product => product.id === action.product.id);
                const oldProductDetails = cart[foundIndex]
                cart[foundIndex] = action.product;
                totalItems += action.product.quantity - oldProductDetails.quantity
                totalPrice += action.product.totalPrice - oldProductDetails.totalPrice
                return { ...state, cart, totalItems, totalPrice }
        case ACTIONS.REMOVE_PRODUCT:
                cart = cart.filter(product => product.id !== action.product.id);
                totalItems -= action.product.quantity
                totalPrice -= action.product.totalPrice
                return { ...state, cart, totalItems, totalPrice }
        default: return state
    }
}