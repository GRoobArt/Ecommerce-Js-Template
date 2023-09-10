export default class listProduct {
  constructor(products) {
    this.products = products || []
  }
  postProduct(product) {
    this.products.push(product)
  }

  //? Metodo para obtener listado.
  getNames() {
    const allListing = this.products.map((product) => product.categorie)
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
}
