var bars = document.getElementById('bars');
var itemNavigation = document.querySelectorAll('.nav-item');


function menuMobile(){

    var headerNav = document.getElementById('header-nav');
    bars.classList.toggle('active');
    headerNav.classList.toggle('active');

    const active = bars.classList.contains('active');

    if (active) {
        bars.setAttribute('aria-label', 'Fechar menu');
        bars.setAttribute('aria-expanded', 'true');
    } else {
        bars.setAttribute('aria-label', 'Abrir menu');
        bars.setAttribute('aria-expanded', 'false');
    }


}


bars.addEventListener('click', menuMobile);

itemNavigation.forEach((item) =>{
    item.addEventListener('click', menuMobile);
});
