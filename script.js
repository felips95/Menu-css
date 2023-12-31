document.addEventListener('DOMContentLoaded', function(){

    const toggle = document.getElementById('toggle');
    const nav = document.getElementById('nav');
    const nav_btn = document.getElementById('nav_btn');

    const toggleNav = () => {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    };

    const closeNav = () => {
        nav.classList.remove('active');
        toggle.classList.remove('active');
    };

    toggle.onclick = toggleNav;
    nav_btn.onclick = (event) => {
        event.stopPropagation();
        closeNav();
    };

    document.onclick = function(e) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickInsideToggle = toggle.contains(e.target);

        if (!isClickInsideNav && !isClickInsideToggle){
            closeNav();
        }
    };
  
});