import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../actions'

const cart_reducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const { id, color, amount, product } = action.payload
    const temItem = state.cart.find((i) => i.id === id + color)
    if (temItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id + color) {
          let newAmount = cartItem.amount + amount
          if (newAmount > cartItem.max) {
            newAmount = cartItem.max
          }
          return { ...cartItem, amount: newAmount }
        } else {
          return cartItem
        }
      })
      return { ...state, cart: tempCart }
    } else {
      const newItem = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.images[0].url,
        price: product.price,
        max: product.stock,
      }
      return { ...state, cart: [...state.cart, newItem] }
    }
  }
  if (action.type === REMOVE_CART_ITEM) {
    const newItem = state.cart.filter((f) => f.id !== action.payload)

    return { ...state, cart: newItem }
  }
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] }
  }

  if (action.type === TOGGLE_CART_ITEM_AMOUNT) {
    const { id, value } = action.payload
    const tempCart = state.cart.map((ıtem) => {
      if (ıtem.id === id) {
        if (value === 'inc') {
          let newAmount = ıtem.amount + 1
          if (newAmount > ıtem.max) {
            newAmount = ıtem.max
          }
          return { ...ıtem, amount: newAmount }
        }
        if (value === 'dec') {
          let newAmount = ıtem.amount - 1
          if (newAmount < 1) {
            newAmount = 1
          }
          return { ...ıtem, amount: newAmount }
        }
      }
      return ıtem
    })
    return { ...state, cart: tempCart }
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_amount, total_items } = state.cart.reduce(
      (total, ıtem) => {
        let { amount, price } = ıtem
        total.total_amount += amount * price
        total.total_items += amount

        return total
      },
      { total_amount: 0, total_items: 0 }
    )

    return { ...state, total_amount, total_items }
  }

  throw new Error(`No Matching "${action.type}" - action type`)
}

export default cart_reducer
