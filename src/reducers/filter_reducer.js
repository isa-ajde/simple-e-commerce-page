import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    let maxprice = action.payload.map((p) => p.price)
    maxprice = Math.max(...maxprice)
    return {
      ...state,
      filtered_products: [...action.payload],
      all_products: [...action.payload],
      filters: { ...state.filters, max_price: maxprice, price: maxprice },
    }
  }
  if (action.type === SET_GRIDVIEW) {
    return { ...state, grid_view: true }
  }
  if (action.type === SET_LISTVIEW) {
    return { ...state, grid_view: false }
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload }
  }
  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state
    let templeProducts = [...filtered_products]
    if (sort === 'price-lowest') {
      templeProducts = templeProducts.sort((a, b) => a.price - b.price)
    }
    if (sort === 'price-highest') {
      templeProducts = templeProducts.sort((a, b) => b.price - a.price)
    }
    if (sort === 'name-a') {
      templeProducts = templeProducts.sort((a, b) => {
        return a.name.localeCompare(b.name)
      })
    }
    if (sort === 'name-z') {
      templeProducts = templeProducts.sort((a, b) => {
        return b.name.localeCompare(a.name)
      })
    }
    return { ...state, filtered_products: templeProducts }
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload
    return { ...state, filters: { ...state.filters, [name]: value } }
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state
    const { text, category, company, color, price, shipping } = state.filters
    let tempProducts = [...all_products]
    // filters
    // text

    if (text) {
      tempProducts = tempProducts.filter((product) => {
        return product.name.toLowerCase().includes(text.toLowerCase())
      })
    }
    // category

    if (category !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.category === category
      })
    }
    // company
    if (company !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        return product.company === company
      })
    }
    // color
    if (color !== 'all') {
      tempProducts = tempProducts.filter((product) => {
        // includes() te kullanabilirdik
        return product.colors.find((c) => {
          return c === color
        })
      })
    }

    tempProducts = tempProducts.filter((p) => {
      return p.price <= price
    })

    if (shipping) {
      tempProducts = tempProducts.filter((s) => {
        return s.shipping === true
      })
    }

    return { ...state, filtered_products: tempProducts }
  }

  if (action.type === CLEAR_FILTERS) {
    return {
      ...state,
      filters: {
        ...state.filters,
        text: '',
        category: 'all',
        company: 'all',
        color: 'all',
        price: state.filters.max_price,
        shipping: false,
      },
    }
  }
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
