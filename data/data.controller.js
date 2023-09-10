import Cart from '../scripts/model/constructor.cart.js'
import User from '../scripts/model/constructor.user.js'
import listProduct from '../scripts/model/contructor.categorie.js'
import Product from '../scripts/model/constructor.product.js'
import Data from '../scripts/model/constructor.data.js'

import dataProducts from './data.products.js'

// Buscamos data en el LocalStorage
const localUser = localStorage.getItem('user')
const localCart = localStorage.getItem('cart')
const localCategorie = localStorage.getItem('categorie')

//Contruimos el usuario y el carrito de compra y el Catalogo de productos.
let userSession
let cartSession
let catalogeProduct

// Si no esta logeado
if (!localUser && !localCart && !localCategorie) {
  userSession = new User()
  cartSession = new Cart()
  catalogeProduct = new listProduct()

  createdInsertProducts()
} else if (!localUser && !localCart && localCategorie) {
  userSession = new User()
  cartSession = new Cart()
  catalogeProduct = new listProduct(JSON.parse(localCategorie).products)
} else if (!localUser && localCart && localCategorie) {
  userSession = new User()
  cartSession = new Cart(JSON.parse(localCart))
  catalogeProduct = new listProduct(JSON.parse(localCategorie).products)
} else if (localUser && localCart && localCategorie) {
  userSession = new User(JSON.parse(localUser))
  cartSession = new Cart(JSON.parse(localCart))
  catalogeProduct = new listProduct(JSON.parse(localCategorie).products)
}

const dataSession = new Data(userSession, cartSession, catalogeProduct)

// Creamos los productos y Aplicamos al Catalogo de productos
function createdInsertProducts() {
  dataProducts.map((product) => {
    const products = new Product(product)
    products.variants.map((variant) => {
      catalogeProduct.postProduct(variant)
    })
  })
}

console.log(dataSession)

export default dataSession
