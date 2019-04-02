import { ACTIONS } from '../Constants'

export const addToCart = (product) => ({
    type: ACTIONS.ADD_TO_CART,
    product,
})

export const updateCart = (product) => ({
    type: ACTIONS.UPDATE_CART,
    product,
})

export const removeProduct = (product) => ({
    type: ACTIONS.REMOVE_PRODUCT,
    product,
})