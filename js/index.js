'use strict';

import menuHamburguer from "./modules/hamburguer.js";
import swiper from "./modules/swiper.js";
import cargarPeliculas from "./modules/movies.js";

const documentReady = () => {
  menuHamburguer();
  swiper();
  cargarPeliculas();
};

document.addEventListener('DOMContentLoaded', documentReady);