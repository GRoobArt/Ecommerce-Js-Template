import dataSession from '../data/data.controller.js'
import { PRODUCT_IMAGES_PATH } from './helper/contants.path.js'

const totalProduct = document.querySelectorAll('.qty-product')

const products = dataSession.categorie.products

// Eliminar productos repetidos
const colorsSeen = {}
const productColorsFilter = products.filter((item) => {
  if (colorsSeen[item.name]) {
    return false
  } else {
    colorsSeen[item.name] = true
    return true
  }
})

totalProduct.forEach((item) => {
  item.textContent = productColorsFilter.length
})

const listProduct = document.querySelector('.list-products')
productColorsFilter.map(({ name, price, img, sku, parent }) => {
  const itemHTML = `
        <li id="${parent}-${sku}" class="product">
            <a href="product.html" class="link">
                <img src="${PRODUCT_IMAGES_PATH + img}-1.jpg"
                    alt="${name}" class="img-product">
                <div class="product-info">
                    <h5 class="name-product">${name}</h5>
                    <div class="price-box"><span class="price">${price}</span></div>
                </div>
            </a>
        </li>
    `

  listProduct.innerHTML += itemHTML
})

const product = document.querySelectorAll('.product')
product.forEach((item) => {
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
