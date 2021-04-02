import { createStore, createHook } from 'react-sweet-state'
import {
  getBoughtProductsFromDB,
  addBoughtProductToDB,
  removeBoughtProductsFromDB,
  updateBoughtProductsFromDB
} from '../common/db.js'

const Store = createStore({
  initialState: {
    bought: [],
    loading: false,
    error: ''
  },
  actions: {
    getBoughtProducts: (user) => async ({ setState, getState }) => {
      if (getState().loading === true) return

      setState({
        loading: true
      })

      try {
        const bought = await getBoughtProductsFromDB(user)
        setState({
          bought: bought,
          loading: false,
          error: ''
        })
      } catch (e) {
        setState({
          bought: [],
          loading: false,
          error: e
        })
      }
    },
    addBoughtProduct: (user, product) => async ({ setState }) => {
      await addBoughtProductToDB(user, product)
      try {
        const bought = await getBoughtProductsFromDB(user)
        setState({
          bought: bought,
        })
      } catch (e) {
        setState({
          error: e
        })
      }
    },
    removeBoughtProduct: (user, product) => async ({ setState }) => {
      await removeBoughtProductsFromDB(user, product)
      try {
        const bought = await getBoughtProductsFromDB(user)
        setState({
          bought: bought,
        })
      } catch (e) {
        setState({
          error: e
        })
      }
    },
    updateBoughtProduct: (user, product) => async ({ setState, getState }) => {
      await updateBoughtProductsFromDB(user, product)
      setState({
        bought: getState().bought.map(p => p.name === product.name ? product : p)
      })
    },
  },
  name: 'bought products',
})

const useBoughtProductState = createHook(Store)

export default useBoughtProductState