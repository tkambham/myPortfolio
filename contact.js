let items = document.querySelectorAll('.contact-item');

items[0].onclick = function() {
    let phone = document.getElementsByClassName('phone')[0];
    phone.href = "tel:+15722082825";
}

items[1].onclick = function() {
    let phone = document.getElementsByClassName('phone')[1];
    phone.href = "tel:+917288950037";
}

items[2].onclick = function() {
    let mail = document.getElementsByClassName('mail')[0];
    mail.href = "mailto:triloksaiofficial@gmail.com";
}

items[3].onclick = function() {
    let mail = document.getElementsByClassName('mail')[1];
    mail.href = "mailto:trilokkambham2001@gmail.com";
}

items[4].onclick = function() {
    let linkedin = document.getElementsByClassName('linkedin');
    linkedin.href = "https://www.linkedin.com/in/trilok-kambham-4923531b3";
    window.open(linkedin.href);
}

items[5].onclick = function() {
    let github = document.getElementsByClassName('github');
    github.href = "https://github.com/trilokkambham";
    window.open(github.href);
}

items[6].onclick = function() {
    let leetcode = document.getElementsByClassName('github');
    leetcode.href = "https://leetcode.com/Trilok03/";
    window.open(leetcode.href);
}

items[7].onclick = function() {
    let kattis = document.getElementsByClassName('github');
    kattis.href = "https://open.kattis.com/users/trilok-sai-kambham";
    window.open(kattis.href);
}

