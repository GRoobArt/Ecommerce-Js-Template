const UUID = () => {
  let UUID = crypto.randomUUID()
  let arrayID = UUID.split('-')

  return arrayID[0]
}
const dataProducts = [
  {
    sku: UUID(),
    name: 'Polera',
    price: 29990,
    specialprice: 21990,
    color: ['Orange', 'Red', 'Blue'],
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    sku: UUID(),
    name: 'Poleron',
    price: 29990,
    specialprice: 21990,
    color: ['Orange', 'Red', 'Blue'],
    size: ['S', 'M', 'L', 'XL'],
  },
  {
    sku: UUID(),
    name: 'Camisas',
    price: 29990,
    specialprice: 21990,
    color: ['Orange', 'Red', 'Blue'],
    size: ['S', 'M', 'L', 'XL'],
  },
]
//* Contructorores de Objetos
class Cart {
  constructor(user) {
    this.id = UUID()
    this.user = user.id
    this.shipping = 0
    this.subtotal = 0
    this.total = 0
    this.productos = []
  }
  addProduct(product) {
    this.total += product.price
    this.subtotal += product.price
    this.productos.push(product)
  }

  addShipping(pais) {
    if (pais) {
      this.shipping = 3990
      this.total += 3990
    }
  }
}
class User {
  constructor({ email, name, lastname }) {
    this.id = UUID()
    this.email = email
    this.name = name
    this.lastname = lastname
    this.fullname = `${name} ${lastname}`
    this.group = 'invitado'
  }
}
class Product {
  constructor({ sku, name, specialprice, color, size, price }) {
    this.variants = []
    color.forEach((colorOption) => {
      size.forEach((sizeOption) => {
        const variant = {
          sku: UUID(),
          parent: sku,
          name: name,
          color: colorOption,
          size: sizeOption,
          price: price,
          specialprice: specialprice,
        }
        this.variants.push(variant)
      })
    })
  }
}
class listProduct {
  constructor() {
    this.products = []
    this.searchProducts = []
  }
  postProduct(product) {
    this.products.push(product)
    this.searchProducts.push(product)
  }

  //? Metodo para obtener listado.
  getNames() {
    const allListing = this.products.map((product) => product.name)
    const listing = [...new Set(allListing)]
    return listing
  }
  getColors() {
    const allListing = this.searchProducts.map((product) => product.color)
    const listing = [...new Set(allListing)]
    return listing
  }
  getSizes() {
    const allListing = this.searchProducts.map((product) => product.size)
    const listing = [...new Set(allListing)]
    return listing
  }

  //? Metodos de Filtrado.
  filterProducts(filters) {
    for (const key in filters) {
      // console.log(filters[key])
      this.searchProducts = this.searchProducts.filter(
        (products) => products[key].toLowerCase() === filters[key].toLowerCase()
      )
    }
  }
  filterProductName(name) {
    this.searchProducts = this.searchProducts.filter(
      (product) => product.name.toLowerCase() === name.toLowerCase()
    )
  }
  filterProductColor(color) {
    this.searchProducts = this.searchProducts.filter(
      (product) => product.color.toLowerCase() === color.toLowerCase()
    )
  }
  filterProductSize(size) {
    this.searchProducts = this.searchProducts.filter(
      (product) => product.size.toLowerCase() === size.toLowerCase()
    )
  }
  filterReset() {
    this.searchProducts = this.products
  }
}
//* ---------------------------------

//* Creacion de productos
const newlistProduct = new listProduct()

dataProducts.map((product) => {
  const products = new Product(product)
  products.variants.forEach((product) => {
    newlistProduct.postProduct(product)
  })
})
//* ---------------------------------

console.log(newlistProduct)

//* Objeto y construccion de Usuario

function alphacaStore() {
  let isUser = false
  let ContinueSale = true
  let userRegisted = []

  // Creamos Usuario.
  function CreateUser() {
    const user = {
      name: prompt('Ingresa tu Nombre').toLowerCase(),
      lastname: prompt('Ingresa tu Apellido').toLowerCase(),
      email: prompt('Ingresa Tu Correo Electronico').toLowerCase(),
    }
    return new User(user)
  }

  do {
    // Vemos si el usuario ya esta registrado.
    if (!isUser) {
      userRegisted = CreateUser()
      isUser = true
    }
    // Creamos Carro de compras
    let newCart = new Cart(userRegisted)

    // BUscamos que porducto quiere comprar el Usuario
    let filters = {
      name: prompt(
        `Que Producto quieres comprar? ${newlistProduct.getNames()}`
      ),
      color: prompt(`Que Color quieres comprar? ${newlistProduct.getColors()}`),
      size: prompt(`Que Talla quieres comprar? ${newlistProduct.getSizes()}`),
    }
    newlistProduct.filterProducts(filters)

    // Añadimos el Producto al carro.
    newCart.addProduct(newlistProduct.searchProducts[0])

    // Reseteamos los filtros de los productos.
    newlistProduct.filterReset()

    const SaleAddProduct = prompt(
      'Quieres Seguir Comprando? Si | No'
    ).toLowerCase()
    if (SaleAddProduct === 'no') {
      ContinueSale = false

      const countrySale = prompt('De que pasis estas comprando?')

      newCart.addShipping(countrySale)

      alert(
        `Resumen del pedido: El total de tu compra es ${newCart.total}, con una cantidad de productos ${newCart.productos.length}`
      )
    }
    console.log(newCart)
  } while (ContinueSale !== false)
}

alphacaStore()
