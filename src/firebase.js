import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const app = firebase.initializeApp({
  apiKey: "AIzaSyDeuYI9C0Xc3zUI_BK2QMc8LV9vv0uaK9A",
  authDomain: "sneakers-app-30474.firebaseapp.com",
  databaseURL: "https://sneakers-app-30474-default-rtdb.firebaseio.com",
  projectId: "sneakers-app-30474",
  storageBucket: "sneakers-app-30474.appspot.com",
  messagingSenderId: "605431725239",
  appId: "1:605431725239:web:b820a2f04927eead6b6132"
})

// apiKey: "xxx",
//   authDomain: "xxx",
//   projectId: "xxx",
//   storageBucket: "xxx",
//   messagingSenderId: "xxx",
//   appId: "xxx"

export const db = app.database()
export const auth = app.auth()
export default app
