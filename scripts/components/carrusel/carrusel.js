import { PRODUCT_IMAGES_PATH } from '../../helper/contants.path.js'

const constructCarrusel = (products) => {
  const ListProduct = products
    .map(({ sku, name, img, price }) => {
      const productHTML = `
        <li id="${sku}" class="item-carrusel">
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

  const carruselHTML = `
    <ul class="carrusel-block">
        ${ListProduct}
    </ul>
    `

  return carruselHTML
}

export default constructCarrusel
