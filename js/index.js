'use strict';

import menuHamburguer from "./modules/hamburguer.js";
import swiper from "./modules/swiper.js";
import cargarPeliculas from "./modules/movies.js";
import darkmode from "./modules/darkmode.js";

const documentReady = () => {
  menuHamburguer();
  swiper();
  cargarPeliculas();
  darkmode();
};

document.addEventListener('DOMContentLoaded', documentReady);