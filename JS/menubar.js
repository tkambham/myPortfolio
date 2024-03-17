let menuItems = document.querySelectorAll('.right-list li a');

menuItems[0].addEventListener('click', function() {
    menuItems[0].href = 'index.html';
});

menuItems[1].addEventListener('click', function() {
    menuItems[1].href = 'about.html';
});

menuItems[2].addEventListener('click', function() {
    menuItems[2].href = 'projects.html';
});

menuItems[3].addEventListener('click', function() {
    menuItems[3].href = 'contact.html';
});

let menuTitle = document.querySelector('.left-list li h1');
menuTitle.addEventListener('click', function() {
    window.location.href = 'about.html';
});