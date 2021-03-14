import StockXAPI from 'stockx-api'
const stockx = new StockXAPI()

export const getProducts = async (product, limit = 5) => stockx.searchProducts(product, { limit: limit })