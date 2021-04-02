import { createStore, createHook } from 'react-sweet-state'
import {
  getObservedProductsFromDB,
  addObservedProductToDB,
  removeObservedProductsFromDB,
  // updateBoughtProductsFromDB
} from '../common/db.js'

const Store = createStore({
  initialState: {
    observed: [],
    loading: false,
    error: ''
  },
  actions: {
    getObservedProducts: (user) => async ({ setState, getState }) => {
      if (getState().loading === true) return

      setState({
        loading: true
      })

      try {
        const observed = await getObservedProductsFromDB(user)
        setState({
          observed: observed,
          loading: false,
          error: ''
        })
      } catch (e) {
        setState({
          observed: [],
          loading: false,
          error: e
        })
      }
    },
    addObservedProduct: (user, product) => async ({ setState }) => {
      await addObservedProductToDB(user, product)
      try {
        const observed = await getObservedProductsFromDB(user)
        setState({
          observed: observed,
        })
      } catch (e) {
        setState({
          error: e
        })
      }
    },
    removeObservedProduct: (user, product) => async ({ setState }) => {
      await removeObservedProductsFromDB(user, product)
      try {
        const observed = await getObservedProductsFromDB(user)
        setState({
          observed: observed,
        })
      } catch (e) {
        setState({
          error: e
        })
      }
    },
    updateObservedProduct: (product) => ({ setState, getState }) => {
      setState({
        observed: getState().observed.map(p => p.name === product.name ? product : p)
      })
    },
  },
  name: 'observed products',
})

const useObservedProductState = createHook(Store)

export default useObservedProductState