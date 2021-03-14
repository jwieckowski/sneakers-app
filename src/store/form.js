import { createStore, createHook } from 'react-sweet-state'

const Store = createStore({
  initialState: {
    loading: false,
    error: ''
  },
  actions: {
    setLoading: (flag) => ({ setState }) => {
      setState({
        loading: flag
      })
    },
    setError: (error) => ({ setState }) => {
      setState({
        error: error
      })
    },
  },
  name: 'form',
})

const useFormState = createHook(Store)
export default useFormState