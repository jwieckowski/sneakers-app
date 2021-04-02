import { createStore, createHook } from 'react-sweet-state'
import { getProducts } from '../stockx.js'

const Store = createStore({
  initialState: {
    products: [],
    loading: false,
    error: '',
    activeProduct: undefined,
    activeModalProduct: undefined,
    modalType: undefined
  },
  actions: {
    getProducts: (product, limit) => async({ setState, getState }) => {
      if (getState().loading === true) return

      setState({
        loading: true
      })

      try {
        const products = await getProducts(product, limit)
        setState({
          products: products,
          loading: false,
          error: ''
        })
      } catch (e) {
        setState({
          products: [],
          loading: false,
          error: e
        })
      }
    },
    setActiveProduct: (product) => ({ setState }) => {
      setState({
        activeProduct: product
      })
    },
    setActiveModalProduct: (product, type) => ({ setState }) => {
      setState({
        activeModalProduct: product,
        modalType: type
      })
    }
  },
  name: 'products',
})

const useProductsState = createHook(Store)
export default useProductsState