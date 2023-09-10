import UUID from '../helper/UUID.js'

class Product {
  constructor({ sku, name, specialprice, categorie, color, size, price }) {
    this.variants = []
    color.forEach((colorOption) => {
      size.forEach((sizeOption) => {
        const variant = {
          sku: UUID(),
          parent: sku,
          name: `${name} ${colorOption}`,
          categorie: categorie,
          color: colorOption,
          size: sizeOption,
          price: price,
          specialprice: specialprice,
          img: `${sku}-${colorOption.toLowerCase()}`,
        }
        this.variants.push(variant)
      })
    })
  }
}

export default Product
