import {
  BRAND_BANNER_PATH,
  URL_PATH,
  NAME_PROYECT,
} from '../../helper/contants.path.js'

const construcctorSlider = ({ name, desc }) => {
  const SliderItemHTML = `
        <article id="${name}" class="item-slide">
            <img loading="lazy" src="${
              URL_PATH + NAME_PROYECT + BRAND_BANNER_PATH + name
            }.jpg" alt="${name}" class="img-slider">
            <div class="info-block mid-left horizontal">
                <div class="text-block">
                    <h4>${name}</h4>
                    <p>${desc}</p>
                </div>
                <a href="${
                  URL_PATH + NAME_PROYECT
                }/view/categorie.html" class="link s">Ver Todo</a>
            </div>
        </article>
    `
  return SliderItemHTML
}

export default construcctorSlider
