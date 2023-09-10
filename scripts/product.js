import dataSession from '../data/data.controller.js'
import { PRODUCT_IMAGES_PATH } from './helper/contants.path.js'

const ProductSelect = JSON.parse(localStorage.getItem('product'))

const parentSelect = dataSession.categorie.products.filter(
  (item) => item.parent === ProductSelect.parent
)
let skuSelect = parentSelect.filter((item) => item.sku === ProductSelect.sku)

// Aplicar Nombres
const productInfo = document.querySelectorAll('.head-info .name-product')
productInfo.forEach((item) => {
  item.textContent = skuSelect[0].name
})

//Aplicar precio
const productPrice = document.querySelectorAll('.head-info .price')
productPrice.forEach((item) => {
  item.textContent = `$${skuSelect[0].price}`
})

// Construccion de Layout de imgs
const fotogramasProducts = document.querySelector(
  '.fotograma-frames .list-fotograma'
)
for (let i = 1; i <= 5; i++) {
  let select = i === 1 ? 'select' : ''
  fotogramasProducts.innerHTML += `
        <li class="fotograma-frame-nav ${select}">
            <img class="img-product"
                src="${PRODUCT_IMAGES_PATH + skuSelect[0].img}-${i}.jpg"
                alt="${skuSelect[0].name}">
        </li>
    `
}

// Selectores del DOM de select de Colores.
const colorSelect = document.querySelector('.color')
const selectsColor = colorSelect.querySelector('select')

const colorsParent = parentSelect.map((products) => products.color)
const colors = [...new Set(colorsParent)]

// Construccion de optiones de colores
colors.map((color) => {
  let colorSelect = color === skuSelect[0].color ? 'selected' : ''
  selectsColor.innerHTML += ` <option ${colorSelect} value="${color}">${color}</option>`
})

const sizeSelect = document.querySelector('.size select')
const sizesParent = parentSelect.map((products) => products.size)
const sizes = [...new Set(sizesParent)]

sizes.map((size) => {
  sizeSelect.innerHTML += ` <option ${sizeSelect} value="${size}">${size}</option>`
})

let colorOptionSelect

// Actualizar Imagenes al cambiar de color
colorSelect.addEventListener('change', function (e) {
  colorOptionSelect = e.target.value
  skuSelect = parentSelect.filter((item) => item.color === colorOptionSelect)
  const ProductSelect = {
    sku: skuSelect[0].sku,
    parent: parentSelect[0].parent,
  }
  localStorage.setItem('product', JSON.stringify(ProductSelect))
  location.reload()
})

//Añadiremos al carro:
const buttonAddCart = document.querySelector('.button.addtocart')
buttonAddCart.addEventListener('click', (e) => {
  e.preventDefault()

  const sizeSelect = document.querySelector('.size select')

  const sizeOptionSelect =
    sizeSelect.options[sizeSelect.selectedIndex].value.toUpperCase()
  const colorOptionSelect = colorSelect.querySelector('select').value

  // Obtenermos el sku a añadir
  skuSelect = parentSelect.filter((item) => item.size === sizeOptionSelect)

  skuSelect = skuSelect.filter((item) => item.color === colorOptionSelect)

  // Obtenemos la lista de Productos de la categoria.
  const listProducts = dataSession.categorie.products
  // Añadimos el producto al carro.
  dataSession.cart.addProduct(listProducts, skuSelect[0])

  dataSession.postCart()
  location.reload()
})
