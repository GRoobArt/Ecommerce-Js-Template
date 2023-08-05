// 1era Entrega:

/**
 * [] Crear un Algoritmo con condional.
 * [] Crear un algoritmo utilizando un ciclo.
 * [] Armar un simulador interactivo, la estructura final de tu proyecto integrador.
 */

const products = [
  {
    id: 1,
    name: 'Tees Orange',
    color: 'Orange',
    size: 'L',
    price: 26190,
  },
  {
    id: 2,
    name: 'Tees Blue',
    color: 'Blue',
    size: 'S',
    price: 64266,
  },
  {
    id: 3,
    name: 'Tees Teal',
    color: 'Teal',
    size: 'XS',
    price: 49160,
  },
  {
    id: 4,
    name: 'Tees Khaki',
    color: 'Khaki',
    size: 'XS',
    price: 81753,
  },
  {
    id: 5,
    name: 'Tees Aquamarine',
    color: 'Aquamarine',
    size: 'XS',
    price: 73628,
  },
]

const cart = {
  id: 21213,
  iduser: 12,
  qty: 0,
  total: 0,
  products: [],
}

const addProductCart = () => {
  let addProductsContinue = true
  do {
    let ProductColor = prompt(
      'Cual es el color la polera que quiere comprar ? Orange | Blue | Teal | Khaki | Aquamarine'
    )
    let product = products.find((p) => p.color === ProductColor)
    let existCart = cart.products.some((p) => p.color === product.color)

    if (!product) {
      alert(`El producto con el color ${ProductColor} ingresado no existe`)
    } else if (existCart) {
      alert(
        `El producto con el color ${ProductColor} ya esta ingresado en el carro`
      )
    } else {
      cart.products.push(product)
      cart.qty = Number(cart.products.length)
      cart.total += Number(product.price)

      if (addProductsContinue) {
        let continueProduct = prompt(
          'Quieres seguir añadiendo Productos? Si | No'
        )
        if (continueProduct === 'Si') {
          addProductsContinue = true
        } else {
          addProductsContinue = false
        }
      }
    }
  } while (cart.qty < products.length && addProductsContinue != false)
  // console.log(cart)
  // console.log(addProductsContinue)
  alert(
    `Actualmente tienes ${cart.qty} productos con un total de $${cart.total}`
  )
}

addProductCart()
