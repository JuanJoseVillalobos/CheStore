import React, { useReducer } from 'react'
import { CartContext } from './CartContext'

export const CartProvider = ({ children }) => {

  const initialState = []

  const cartReducer = (state = initialState, action={}) => {
    switch (action.type) {
      case '[CART] Add Product':
        return [...state, action.payload]
      case '[CART] Remove Product':
        return state.filter(product => product.id !== action.payload)
      case '[CART] Increment Quantity':
        return state.map(product => product.id === action.payload ? { ...product, quantity: product.quantity + 1 } : product)
      case '[CART] Decrement Quantity':
        return state.map(product => product.id === action.payload ? { ...product, quantity: Math.max(1, product.quantity - 1) } : product)
      case '[CART] Clear Cart':
        return []
      default:
        return state
    }
  }

  const [shoppingList, dispatch] = useReducer(cartReducer, initialState)

  const addProduct = (product) => {
    product.quantity = 1
    const action = {
      type: '[CART] Add Product',
      payload: product
    }
    dispatch(action)
  }
  
  const removeProduct = (id) => {
    const action = {
      type: '[CART] Remove Product',
      payload: id
    }
    dispatch(action)
  }
  
  const incrementQuantity = (id) => {
    const action = {
      type: '[CART] Increment Quantity',
      payload: id
    }
    dispatch(action)
  }

  const decrementQuantity = (id) => {
    const action = {
      type: '[CART] Decrement Quantity',
      payload: id
    }
    dispatch(action)
  }

  const clearCart = () => {
    const action = {
      type: '[CART] Clear Cart'
    }
    dispatch(action)
  }

  return (
    <CartContext.Provider value={{ shoppingList, dispatch, addProduct, removeProduct, incrementQuantity, decrementQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  )
}
