import {
  PRODUCT_IMAGES_PATH,
  URL_PATH,
  NAME_PROYECT,
} from '../../helper/contants.path.js'
import dataSession from '../../../data/data.controller.js'

const ProductsHTML = ({ sku, img, name, qty, color, size, price }) => {
  return `
    <div id="${sku}" class="item-minicart">
        <div class="block-info">
          <img class="img-product" src="${
            URL_PATH + NAME_PROYECT + PRODUCT_IMAGES_PATH + img
          }-1.jpg" alt="${name}">
          <div class="info-product">
            <p class="name">${name}</p>
            <p>color: ${color} / size: ${size}</p>
            <p>qty: ${qty}</p>
            <p class="price">$${price * qty}</p>
          </div>
        </div>
        <div class="action-delete">
          <i class="fa-solid fa-trash"></i>
        </div>
    </div>
`
}

const ResumentMinicartHTML = ({ subtotal, shipping, total }) => {
  return `
      <ul class="resument-minicart">
          <li class="list-item">Sub Total: <span class="tag">$${subtotal}</span></li>
          <li class="list-item">Envio: <span class="tag">$${shipping}</span></li>
          <li class="list-item">Total: <span class="tag">$${total}</span></li>
      </ul>
  `
}

const MinicartHTML = ({ subtotal, shipping, total, productos }) => {
  const listProducts = productos.map((item) => ProductsHTML(item)).join('')
  const minicartHTML = `
    <div class="list-minicart">
        ${listProducts}
    </div>
    ${ResumentMinicartHTML({ subtotal, shipping, total })}
  `
  return minicartHTML
}

const constructorMinicart = (cart) => {
  if (cart.count !== 0) {
    Swal.fire({
      title: `Minicart (${cart.count})`,
      position:
        document.documentElement.clientWidth < 768 ? 'bottom-end' : 'top-end',
      html: MinicartHTML(cart),
      width: 400,
      showConfirmButton: cart.productos.length > 0 ? true : false,
      confirmButtonColor: '#000000',
      confirmButtonText: 'Pagar',
      showCancelButton: cart.productos.length > 0 ? true : false,
      cancelButtonText: 'Vaciar Carrito',
      focusConfirm: false,
      customClass: {
        container: 'minicart',
        title: 'minicart-title',
        popup: 'minicart-popup',
        actions: 'minicart-actions',
        htmlContainer: 'minicart-container',
        confirmButton: 'button primary fill',
        cancelButton: 'button link fill',
      },
      showClass: {
        popup: 'animate__animated animate__fadeInDown',
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = `${URL_PATH + NAME_PROYECT}/view/cart.html`
      } else if (result.isDismissed && result.dismiss === 'cancel') {
        dataSession.cart.deleteProducts()
        dataSession.postCart()
        location.reload()
      }
    })
  } else {
    Swal.fire({
      title: 'Minicart Vacio',
      text: 'No has añadido productos al carrito',
      icon: 'warning',
      focusConfirm: false,
      customClass: {
        confirmButton: 'button primary fill',
      },
    })
  }
}

export default constructorMinicart
