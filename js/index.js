'use strict';

import menuHamburguer from "./modules/hamburguer.js";
import swiper from "./modules/swiper.js";

const documentReady = () => {
  menuHamburguer();
  swiper();
};

document.addEventListener('DOMContentLoaded', documentReady);