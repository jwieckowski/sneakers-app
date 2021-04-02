// database data manipulation
import { db } from '../firebase.js'

const addBoughtProductToDB = (user, product) => db.ref(`${user.uid}/bought/${product.uuid}`).set({ product })
const addSoldProductToDB = (user, product) => db.ref(`${user.uid}/sold/${product.uuid}`).set({ product })
const addObservedProductToDB = (user, product) => db.ref(`${user.uid}/observed/${product.uuid}`).set({ product })

const getBoughtProductsFromDB = async (user) => {
  const dataRef = await db.ref(`${user.uid}/bought`)

  const data = []
  await dataRef.on('value', function (snapshot) {
    snapshot.forEach(function(child) {
      data.push(child.val().product)
    })
  })
  return data
}

const getSoldProductsFromDB = async (user) => {
  const dataRef = await db.ref(`${user.uid}/sold`)

  const data = []
  await dataRef.on('value', function (snapshot) {
    snapshot.forEach(function(child) {
      data.push(child.val().product)
    })
  })
  return data
}

const getObservedProductsFromDB = async (user) => {
  const dataRef = await db.ref(`${user.uid}/observed`)

  const data = []
  await dataRef.on('value', function (snapshot) {
    snapshot.forEach(function(child) {
      data.push(child.val().product)
    })
  })
  return data
}

const removeBoughtProductsFromDB = (user, product) => db.ref(`${user.uid}/bought/${product.uuid}`).set(null)

const removeSoldProductsFromDB = (user, product) => db.ref(`${user.uid}/sold/${product.uuid}`).set(null)

const removeObservedProductsFromDB = (user, product) => db.ref(`${user.uid}/observed/${product.uuid}`).set(null)

const updateBoughtProductsFromDB = async (user, product) => {
  const productRef = await db.ref(`${user.uid}/bought/${product.uuid}`)
  // productRef.child().update({})
  console.log(productRef.child())
}

export {
  addBoughtProductToDB,
  addSoldProductToDB,
  addObservedProductToDB,
  getBoughtProductsFromDB,
  getSoldProductsFromDB,
  getObservedProductsFromDB,
  removeBoughtProductsFromDB,
  removeSoldProductsFromDB,
  removeObservedProductsFromDB,
  updateBoughtProductsFromDB
}