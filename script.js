document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });

window.addEventListener('scroll', ()=>{
    const navbar=document.querySelector('.navbar');
    window.scrollY > 50 ? navbar.style.backgroundColor='#bbd9eb50' : navbar.style.backgroundColor='transparent';
});

//menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

 
const navItems = navLinks.querySelectorAll('a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});