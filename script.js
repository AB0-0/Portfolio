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