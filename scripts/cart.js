import dataSession from '../data/data.controller.js'
import {
  PRODUCT_IMAGES_PATH,
  NAME_PROYECT,
  URL_PATH,
} from './helper/contants.path.js'

const cart = dataSession.cart
const cartProducts = cart.productos

const listProduct = document.querySelector('.list-products')

// console.log(cartProducts)

cartProducts.map(({ name, price, img, sku, parent, size, color, qty }) => {
  const itemHTML = `
            <li id="${parent}-${sku}" class="product">
                <a href="product.html" class="link">
                    <img src="${
                      URL_PATH + NAME_PROYECT + PRODUCT_IMAGES_PATH + img
                    }-1.jpg"
                        alt="${name}" class="img-product">
                    <div class="product-info">
                        <h5 class="name-product">${name}</h5>
                        <p>color:<span class="color"> ${color}</span> / size:<span class="size"> ${size}</span></p>
                        <p>qty: <span class="qty">${qty}</span></p>
                        <div class="price-box"><span class="price">$${
                          price * qty
                        }</span></div>
                    </div>
                </a>
            </li>
        `
  listProduct.innerHTML += itemHTML
})

const resument = document.querySelector('.list-resumen')
const subtotal = resument.querySelector('.subtotal')
const shipping = resument.querySelector('.shipping')
const total = resument.querySelector('.total')

subtotal.textContent = `$${cart.subtotal}`
shipping.textContent = `$${cart.shipping}`
total.textContent = `$${cart.total}`

const formShipping = document.querySelector('#form-shipping')

formShipping.addEventListener('submit', (e) => {
  e.preventDefault()
  const shipping = e.target.country.value

  cart.addShipping(shipping)
  dataSession.postCart()

  location.reload()
})

const shippingCart = cart.shipping
const paymentOrden = document.querySelector('#paymentOrden')

if (shippingCart > 0) {
  formShipping.style.display = 'none'
  paymentOrden.style.display = 'block'
} else {
  paymentOrden.style.display = 'none'
}

const ordenResument = ({ id, shipping, productos, subtotal, total }) => {
  const resumentHTML = `
    <h5 class="title">Orden: ${id}</h5>
    <ol class="product-list">
        ${productos.map(
          ({ name, price, img, sku, parent, size, color, qty }) => `
            <li id="${parent}-${sku}" class="product">
                    <img src="${
                      URL_PATH + NAME_PROYECT + PRODUCT_IMAGES_PATH + img
                    }-1.jpg"
                        alt="${name}" class="img-product">
                    <div class="product-info">
                        <h5 class="name-product">${name}</h5>
                        <p>color:<span class="color"> ${color}</span> / size:<span class="size"> ${size}</span></p>
                        <p>qty: <span class="qty">${qty}</span></p>
                        <div class="price-box"><span class="price">$${
                          price * qty
                        }</span></div>
                    </div>
            </li>
          `
        )}
    </ol>
    <ol class="orden-Resument">
        <li class="item">Sub Total: <span class="tag">$${subtotal}</span></li>
        <li class="item">Envio: <span class="tag">$${shipping}</span></li>
        <li class="item">Total: <span class="tag">$${total}</span></li>
    </ol>
 `

  return resumentHTML
}

paymentOrden.addEventListener('click', (e) => {
  e.preventDefault()
  Swal.fire({
    title: `Has Completado tu compra`,
    width: 400,
    html: ordenResument(cart),
    confirmButtonText: 'Gracias por tu compra',
    customClass: {
      container: 'order',
      title: 'order-title',
      popup: 'order-popup',
      actions: 'order-actions',
      htmlContainer: 'order-container',
      confirmButton: 'button primary fill',
    },
  }).then((res) => {
    if (res.isConfirmed) {
      dataSession.deleteCart()
      location.reload()
      location.href = `${URL_PATH + NAME_PROYECT}`
    } else {
      dataSession.deleteCart()
      location.reload()
      location.href = `${URL_PATH + NAME_PROYECT}`
    }
  })
})
