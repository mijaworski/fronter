const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navlinks = document.querySelectorAll('.nav-links li');
    //Toggle Nav

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.aniamtion = '';
            } else {
                link.style.animation = 'navlinkfade 10s ease forwards ${index / 7 + 3}'
            }
        });
//burger animation
        burger.classList.toggle('toggle');
        
        
    });

}

navSlide();
