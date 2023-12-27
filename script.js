document.addEventListener('DOMContentLoaded', function(){

    const toggle = document.getElementById('toggle');
    const nav = document.getElementById('nav');
    const nav_btn = document.getElementById('nav_btn');

    toggle.onclick = function() {
        toggle.classList.toggle('active');
        nav.classList.toggle('active');
    };

    nav_btn.onclick = function() {
        nav.classList.remove('active');
        toggle.classList.remove('active');
    }
  
});