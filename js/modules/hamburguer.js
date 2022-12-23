const menuHamburguer = () => {

  const btnMenu = document.getElementById('btnMenu');
  const menu = document.getElementById('menu');
  const elementos = document.querySelectorAll('.link');


  btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnMenu.classList.toggle('is-active');
  });
  
  
  for (let i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
     
    elemento.addEventListener('click', () => {
      menu.classList.remove('active');
    btnMenu.classList.remove('is-active'); 
    });
  }
  
}

export default menuHamburguer();