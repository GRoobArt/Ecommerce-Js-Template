import { PRODUCT_IMAGES_PATH } from '../../helper/contants.path.js'

const constructCarrusel = (products) => {
  const colorsSeen = {}
  const productColorsFilter = products.filter((item) => {
    if (colorsSeen[item.name]) {
      return false
    } else {
      colorsSeen[item.name] = true
      return true
    }
  })

  const ListProduct = productColorsFilter
    .map(({ parent, sku, name, img, price }) => {
      const productHTML = `
        <li id="${parent}-${sku}" class="item-carrusel">
          <a href="./product.html">
            <img loading="lazy" src="${PRODUCT_IMAGES_PATH}${img}-1.jpg"
                alt="${name}" class="img-product">
            <div>
                <h5 class="name-product">${name}</h5>
                <div class="block-price">
                    <span class="price">$${price}</span>
                </div>
            </div>
          </a>
        </li>
        `

      return productHTML
    })
    .join('')

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

  const carruselHTML = `
    <ul class="carrusel-block">
        ${ListProduct}
    </ul>
    `

  return carruselHTML
}

export default constructCarrusel
