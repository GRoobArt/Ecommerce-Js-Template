const navigationPages = {
  home: [{ path: './index.html', component: 'homePage' }],
  nav: [
    { path: './categorie.html', component: 'categoriePage', name: 'Categorie' },
    { path: './product.html', component: 'productPage', name: 'Product' },
  ],
  cart: [{ path: '/cart', component: 'cartPage' }],
}

export default navigationPages
