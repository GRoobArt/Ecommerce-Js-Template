import UUID from '../helper/UUID.js'

export default class Cart {
  constructor({
    user_id = '',
    count = 0,
    shipping = 0,
    subtotal = 0,
    total = 0,
    productos = [],
  } = {}) {
    this.id = UUID()
    this.user_id = user_id
    this.count = count
    this.shipping = shipping
    this.subtotal = subtotal
    this.total = total
    this.productos = productos
  }
  addProduct(listproducts, product) {
    // Buscar Producto en lista de productos.
    const findsListProduct = listproducts.find(
      (item) => item.sku === product.sku
    )
    if (!findsListProduct) {
      // ? Se podria cambiar a hacer una logica para saber si el Producto tiene la Qty necesaria.
      alert('El producto a Añadir No existe')
    } else {
      // Buscar en productos del carro.
      const findCartProducts = this.productos.find(
        (item) => item.sku === product.sku
      )
      if (!findCartProducts) {
        product.qty = 1
        this.productos.push(product)
      } else {
        findCartProducts.qty += 1
      }
      this.count += 1
      this.subtotal += product.price
      this.total += product.price
    }
  }

  addShipping(pais) {
    if (pais) {
      this.shipping = 3990
      this.total += 3990
    }
  }

  deleteProducts() {
    this.subtotal = 0
    this.total = 0
    this.count = 0
    this.productos = []
  }

  deteleProduct(product) {
    this.subtotal -= product.price * product.qty
    this.total -= product.price * product.qty
    this.count -= product.qty
    this.productos = this.productos.filter((item) => item.sku !== product.sku)
  }

  getProduct(sku) {
    return this.productos.find((item) => item.sku === sku)
  }

  getProducts() {
    return this.productos
  }
}
