const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const menumob = document.getElementById('nav');
const dropdown = document.querySelector('.dropdown > a');
const iconMenu = document.getElementById('icon-menu');


btnMobile.addEventListener('click', () => {
  menumob.classList.toggle('active');
  if (menumob.classList.contains('active')){
    iconMenu.src = 'assets/svgs/close.svg';
    iconMenu.alt = 'Fechar menu';
  } else {
    iconMenu.src = 'assets/svgs/hamb-menu.svg';
    iconMenu.alt = 'Abrir menu';
  }

});


if (window.innerWidth <= 760) {
  dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    e.currentTarget.parentElement.classList.toggle('open');
  });
}


