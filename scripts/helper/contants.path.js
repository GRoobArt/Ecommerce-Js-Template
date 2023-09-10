// Constants de Assets Path
const URL_PATH = window.location.origin
const NAME_PROYECT =
  URL_PATH === 'http://127.0.0.1:5500' ? '' : '/Entrega-Robert-Garcia'
const ASSETS_PATH = `/assets/`
const IMAGES_PATH = `${ASSETS_PATH}images/`

// Constants de Products Path
const PRODUCT_IMAGES_PATH = `${IMAGES_PATH}products/`

// Constants de Brands Path
const BRAND_IMAGES_PATH = `${IMAGES_PATH}brand/`

// Constantes de banners Path
const BRAND_BANNER_PATH = `${IMAGES_PATH}banners/`

// Constantes de icons Path
const ICONS_PATH = `${IMAGES_PATH}icons/`

export {
  URL_PATH,
  NAME_PROYECT,
  ASSETS_PATH,
  IMAGES_PATH,
  PRODUCT_IMAGES_PATH,
  BRAND_IMAGES_PATH,
  BRAND_BANNER_PATH,
  ICONS_PATH,
}
