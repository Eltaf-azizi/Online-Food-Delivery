burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-last')
rightNav = document.querySelector('.rightNav');
burger.addEventListener('click', () => {
    rightNav.ckasslist.toggle('v-class-resp')
    navList.ckasslist.toggle('v-class-resp')
    navbar.ckasslist.toggle('h-nav-resp')
})