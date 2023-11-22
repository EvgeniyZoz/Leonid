const body = document.querySelector('body');
const header = document.querySelector('.header');
const menuBtn = document.querySelector('.menu-btn');
const overlay = document.createElement('div');

overlay.classList.add('site-overlay');
header.appendChild(overlay);

window.addEventListener('scroll', function (event) {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 130) {
        body.classList.add('headerFixed');
    } else {
        body.classList.remove('headerFixed');
    }
});

body.addEventListener('click', function(event) {
    if (event.target.classList.contains('menu-btn') || event.target.closest('.menu-btn')) {
        body.classList.toggle('menuActive');
        if (body.classList.contains('menuActive')) {
        } else {
            body.classList.remove('menuActive');
        }
    }
    if (event.target.classList.contains('site-overlay')) {
        body.classList.remove('menuActive');
    }
});

const selectElements = document.querySelectorAll("select");
selectElements.forEach((select) => {
    NiceSelect.bind(select, {});
});

document.addEventListener('DOMContentLoaded', function() {
    // Код, который будет выполнен после полной загрузки и рендеринга документа
    const elem = document.querySelector('.masonry');
    console.log(elem,'=================================')
    if (elem) {
        const msnry = new Masonry(elem, {
            itemSelector: '.masonry-item',
            columnWidth: '.masonry-item'
        });
        window.addEventListener('resize', function () {
            setTimeout(function () { msnry.layout() }, 300);
        }); 
    }
  });

