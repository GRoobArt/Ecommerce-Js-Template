// Header Fixed y Ficha Fixed.

window.addEventListener('scroll', () => {
  const header = document.getElementById('header')
  const headerHeight = header.offsetHeight
  const asideProduct = document.getElementById('info-product')

  const scrollValue =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop

  if (scrollValue > headerHeight * 1.75) {
    header.classList.add('_sticky')
    asideProduct.classList.add('_sticky')
  } else {
    header.classList.remove('_sticky')
    asideProduct.classList.remove('_sticky')
  }
})
