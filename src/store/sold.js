import { createStore, createHook } from 'react-sweet-state'
import {
  getSoldProductsFromDB,
  addSoldProductToDB,
  removeSoldProductsFromDB,
  // updateBoughtProductsFromDB
} from '../common/db.js'

const Store = createStore({
  initialState: {
    sold: [],
    loading: false,
    error: ''
  },
  actions: {
    getSoldProducts: (user) => async ({ setState, getState }) => {
      if (getState().loading === true) return

      setState({
        loading: true
      })

      try {
        const sold = await getSoldProductsFromDB(user)
        setState({
          sold: sold,
          loading: false,
          error: ''
        })
      } catch (e) {
        setState({
          sold: [],
          loading: false,
          error: e
        })
      }
    },
    addSoldProduct: (user, product) => async ({ setState }) => {
      await addSoldProductToDB(user, product)
      try {
        const sold = await getSoldProductsFromDB(user)
        setState({
          sold: sold,
        })
      } catch (e) {
        setState({
          error: e
        })
      }
    },
    removeSoldProduct: (user, product) => async ({ setState }) => {
      await removeSoldProductsFromDB(user, product)
      try {
        const sold = await getSoldProductsFromDB(user)
        setState({
          sold: sold,
        })
      } catch (e) {
        setState({
          error: e
        })
      }
    },
    updateSoldProduct: (product) => ({ setState, getState }) => {
      setState({
        sold: getState().sold.map(p => p.name === product.name ? product : p)
      })
    },
  },
  name: 'sold products',
})

const useSoldProductState = createHook(Store)

export default useSoldProductState