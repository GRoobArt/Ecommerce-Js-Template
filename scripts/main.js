import contructorHeader from './components/header/header.js'
import constructCarrusel from './components/carrusel/carrusel.js'
import construcctorSlider from './components/slider/slider.js'
import constructorMinicart from './components/minicart/minicart.js'
import dataCategorie from '../data/data.categorie.js'
import dataSession from '../data/data.controller.js'

// Contruccion del Header
const header = document.getElementById('header')
header.innerHTML = contructorHeader()

// Generación de un Carrito

// Aplicacion de los valores al Carro de compra.
const cartHTML = document.querySelector('.cart-content')
cartHTML.querySelector('.count').textContent = dataSession.cart.count
cartHTML.querySelector(
  '.price-total'
).textContent = `$${dataSession.cart.total}`

// construccion del carruseles
const carrusel = document.querySelectorAll('.carrusel.products')

if (carrusel) {
  // Aplicamos los productos a los carruseles filtrados por cagetoria.
  carrusel.forEach((carrusel) => {
    carrusel.innerHTML = constructCarrusel(dataSession.categorie.products)
  })
}

const itemCarrusel = document.querySelectorAll('.item-carrusel')
itemCarrusel.forEach((item) => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('id')
    const parent = id.split('-')[0]
    const sku = id.split('-')[1]

    const ProductSelect = {
      sku: sku,
      parent: parent,
    }
    localStorage.setItem('product', JSON.stringify(ProductSelect))
  })
})

// Contruccion del Slider
const slider = document.getElementById('slider-principal')
if (slider) {
  dataCategorie.map((categorie) => {
    slider.innerHTML += construcctorSlider(categorie)
  })
}

const productsMinicart = dataSession.cart
const minicartButton = document.querySelector('.cart-content')

minicartButton.addEventListener('click', () => {
  constructorMinicart(productsMinicart)

  const deleteProduct = document.querySelectorAll('.action-delete')
  deleteProduct.forEach((item) => {
    item.addEventListener('click', () => {
      const sku = item.parentNode.getAttribute('id')
      const product = dataSession.cart.getProduct(sku)

      // console.log(product)

      console.log()

      if (product.qty > 1) {
        dataSession.cart.count--
        product.qty--
        dataSession.postCart()
        location.reload()
      } else {
        dataSession.cart.deteleProduct(product)
        dataSession.postCart()
        location.reload()
      }
    })
  })
})
