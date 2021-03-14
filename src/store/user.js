import { createStore, createHook } from 'react-sweet-state'

const Store = createStore({
  initialState: {
    user: null,
  },
  actions: {
    setCurrentUser: (user) => ({ setState }) => {
      setState({
        user: user
      })
    },
  },
  name: 'user',
})

// const userSubscriber = createSubscriber(Store)
// // or
const useUserState = createHook(Store)

export default useUserState