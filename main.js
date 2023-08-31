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
  addProduct(sku) {
    const product = listProduct.find((product) => product.sku === sku)
    const existingProductCart = this.productos.find(
      (product) => product.sku === sku
    )
    if (product) {
      if (!existingProductCart) {
        product.qty = 1
        this.subtotal += parseFloat(product.price)
        this.total += parseFloat(product.price)
        this.productos.push(product)
      } else {
        product.qty += 1
      }
    } else {
      alert('El producto no existe')
    }
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
    this.searchProduct = []
  }
  postProduct(product) {
    this.products.push(product)
    this.searchProduct.push(product)
  }

  //? Metodo para obtener listado.
  getNames() {
    const allListing = this.products.map((product) => product.name)
    const listing = [...new Set(allListing)]
    return listing
  }
  getColors() {
    const allListing = this.products.map((product) => product.color)
    const listing = [...new Set(allListing)]
    return listing
  }
  getSizes() {
    const allListing = this.products.map((product) => product.size)
    const listing = [...new Set(allListing)]
    return listing
  }
  //? Metodos de Filtrado.
  filterProductName(name) {
    this.searchProduct = this.products.filter(
      (product) => product.name.toLowerCase() === name.toLowerCase()
    )
  }
  filterProductColor(color) {
    this.searchProduct = this.products.filter(
      (product) => product.color.toLowerCase() === color.toLowerCase()
    )
  }
  filterProductSize(size) {
    this.searchProduct = this.products.filter(
      (product) => product.size.toLowerCase() === size.toLowerCase()
    )
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
const alphacaStore = () => {
  let addProductsContinue = true

  do {
    const name = prompt('Cual es tu Nombre?')
    const lastname = prompt('Cual es tu Apellido?')
    const correo = prompt('Ingresa Tu Correo?')
    const user = {
      email: correo.toLowerCase(),
      name: name.toLowerCase(),
      lastname: lastname.toLowerCase(),
    }
    const newUser = new User(user)
    const newCart = new Cart(newUser)

    const saleCategorie = prompt(
      `Que categoria te gustaria Comprar? ${newlistProduct.getNames()}`
    )

    console.log(saleCategorie)

    newlistProduct.filterProductName(saleCategorie)

    const saleColors = prompt(
      `Que color de producto te gustaria Comprar? ${newlistProduct.getColors()}`
    )

    console.log(saleColors)

    newlistProduct.filterProductColor(saleColors)

    const saleSize = prompt(
      `Que color de producto te gustaria Comprar? ${newlistProduct.getSizes()}`
    )

    console.log(saleCategorie)

    newlistProduct.filterProductSize(saleSize)

    addProductsContinue = false
  } while (addProductsContinue != false)
}

alphacaStore()
