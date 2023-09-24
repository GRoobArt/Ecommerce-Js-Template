class Data {
  constructor(UserSession, CartSession, catalogeProduct) {
    this.user = UserSession
    this.cart = CartSession
    this.categorie = catalogeProduct
    this.user.id !== '' && this.postUser()
    this.categorie.products.length !== 0 && this.postCategorie()
  }

  getUser() {
    return this.user
  }

  getCart() {
    return this.cart
  }

  getCategorie() {
    return this.categorie
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

  deleteCart() {
    localStorage.removeItem('cart')
  }
}

export default Data
