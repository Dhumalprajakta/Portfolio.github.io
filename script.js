

LetmenuIcon = document.querySelector('#menu-icon');
Letnavbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

Letsection = document.querySelectorAll('section');
LetnavLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        Lettop = window.scrollY;
        Letoffset = sec.offsetTop - 150;
        Letheight = sec.offsetHeight;
        Letid = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

        };
        
    });

    Letheader = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{ origin:'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{ origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{ origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{ origin:'right'});

const typed = new Typed('.multiple-text',{
    strings: ['Full Stack web Developer', 'Java Developer', 'Application Development'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});