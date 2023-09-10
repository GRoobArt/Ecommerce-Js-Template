class Data {
  constructor(UserSession, CartSession, catalogeProduct) {
    this.user = UserSession
    this.cart = CartSession
    this.categorie = catalogeProduct
    this.categorie.products.length !== 0 && this.postCategorie()
  }

  getUser() {
    return this.user
  }

  getCart() {
    return this.cart
  }

  getCategorie() {
    return this.categories
  }

  postUser() {
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  postCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

  postCategorie() {
    localStorage.setItem('categorie', JSON.stringify(this.categorie))
  }

  deleteUser() {
    localStorage.removeItem('user')
  }
}

export default Data
