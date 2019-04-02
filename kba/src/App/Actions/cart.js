import { ACTIONS } from '../Constants'

export const addToCart = (product) => ({
    type: ACTIONS.ADD_TO_CART,
    product,
})