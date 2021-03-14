// user authentication, user profile modification
import { auth } from '../firebase.js'

const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password)

const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password)

const resetPassword = (email) => auth.sendPasswordResetEmail(email)

const logOut = () => auth.signOut()

const updateEmail = (user, email) => user.updateEmail(email)

const updatePassword = (user, password) => user.updatePassword(password)

const updateUserName = (user, name) => user.updateProfile({ displayName: name })

export {
  signIn,
  signUp,
  resetPassword,
  logOut,
  updateEmail,
  updatePassword,
  updateUserName
}