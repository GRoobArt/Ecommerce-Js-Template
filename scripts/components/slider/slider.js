import { BRAND_BANNER_PATH } from '../../helper/contants.path.js'

const construcctorSlider = ({ name, desc }) => {
  const SliderItemHTML = `
        <article id="${name}" class="item-slide">
            <img loading="lazy" src="${
              BRAND_BANNER_PATH + name
            }.jpg" alt="${name}" class="img-slider">
            <div class="info-block mid-left horizontal">
                <div class="text-block">
                    <h4>${name}</h4>
                    <p>${desc}</p>
                </div>
                <a href="categorie.html" class="link s">Ver Todo</a>
            </div>
        </article>
    `
  return SliderItemHTML
}

export default construcctorSlider
