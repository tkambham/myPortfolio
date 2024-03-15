window.addEventListener('scroll', function() {
    var container1 = document.getElementById('display-1');
    var container2 = document.getElementById('display-2');
  
    var container1Offset = container1.getBoundingClientRect().top;
    var container2Offset = container2.getBoundingClientRect().top;
  
    if (container1Offset < window.innerHeight / 2 && container2Offset > window.innerHeight / 2) {
        display_1.classList.add('inactive');
        display_1.classList.remove('active');
        display_3.classList.add('active');
        display_3.classList.remove('inactive');
    }
  });