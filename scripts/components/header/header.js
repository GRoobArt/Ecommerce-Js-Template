import navigationPages from '../../../data/data.pages.js'
import {
  BRAND_IMAGES_PATH,
  ICONS_PATH,
  NAME_PROYECT,
  URL_PATH,
} from '../../helper/contants.path.js'
import brandInfo from '../../../data/data.brand.js'
import dataSession from '../../../data/data.controller.js'

const isLogin = dataSession.getUser().group === 'customer'

// Consturccion de los Modulos para el Header.
// Construccion del Nav devuelve Html
const contructorNav = () => {
  const itemNavHTML = navigationPages.nav
    .map(
      (page) =>
        `<li class="item-nav"><a href="/view/${page.path}" class="link-nav">${page.name}</a></li>`
    )
    .join('')

  const navHTML = `
    <nav class="navegation"><ul class="menu">${itemNavHTML}</ul></nav>`

  return navHTML
}

// Construccion del Brand devuelve Html
const BrandLogo = `
<div class="item-nav">
    <a class="link-nav" href="${URL_PATH + NAME_PROYECT}">
        <img class="brand logo" src="${BRAND_IMAGES_PATH}${
  brandInfo.logo
}" alt="${brandInfo.logoAlt}">
        <p class="subtitle">
            Alphaca <br> Store
        </p>
    </a>
</div>`

// Construccion del Cart devuelve Html
const contructorCart = () => {
  const cartHTML = `
    <div class="link-nav cart-content">
        <i class="fa-solid fa-cart-shopping"></i>
        <span class="count">0</span>
        <span class="price-total">$0</span>
    </div>`

  return cartHTML
}

// Construccion del LogOut devuelve Html
const buttonLogOut = () => {
  const buttonHTML = ` 
      <button class="button logout icon"><img src="${ICONS_PATH}user-logout.svg" alt="LogOut"></button>
    `
  return buttonHTML
}

// Construccion del Header devuelve Html
const contructorHeader = () => {
  const headerHTML = `
            ${BrandLogo}
            ${contructorNav()}
            <div class="left-content">
              ${isLogin ? buttonLogOut() : ''}
              ${contructorCart()}
            </div>
        `

  return headerHTML
}

const header = document.querySelector('header')

document.addEventListener('scroll', (e) => {
  const headerHeight = header.offsetHeight

  if (window.scrollY > headerHeight * 1.5) {
    header.classList.add('_sticky')
  } else {
    header.classList.remove('_sticky')
  }
})

export default contructorHeader
