import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
  apiKey: "xxx",
  authDomain: "xxx",
  projectId: "xxx",
  storageBucket: "xxx",
  messagingSenderId: "xxx",
  appId: "xxx"
})

export const db = app.database()
export const auth = app.auth()
export default app
