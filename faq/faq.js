const burgerMenu = document.querySelector('.hamburgerMenu')

const navLinks = document.querySelector('.nav-links')

burgerMenu.addEventListener('click', function(){
   navLinks.classList.toggle('active')
  burgerMenu.classList.toggle('toggle') 
})
console.log(navLinks)

