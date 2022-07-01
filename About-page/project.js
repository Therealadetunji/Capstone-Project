const hamburger = document.querySelector('.bars');
const nav = document.querySelector('.mobile-menu');
const close = document.querySelector('.closing');

hamburger.onclick = () => {
  //call-back function
  nav.classList.add('mike');
};

close.onclick = () => {
  nav.classList.remove('mike');
};
