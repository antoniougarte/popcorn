const darkmode = () => {
  const btnDark = document.getElementById('btnDark');
  
  btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnDark.classList.toggle('in');

    //Guardamos el modo en localStorage

    if(document.body.classList.contains('dark')) {

      localStorage.setItem('dark-mode', 'true');
    }else{
      localStorage.setItem('dark-mode', 'false');
    }

  });

  //Obtener el modo actual en el cual nos encontramos

  if(localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnDark.classList.add('in');
  }else{
    document.body.classList.remove('dark');
    btnDark.classList.remove('in');
  }
}

export default darkmode();