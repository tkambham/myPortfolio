document.getElementById('dropdown').addEventListener('click', function() {
    let dropmenu = document.getElementById('dropdown-menu');
    if (dropmenu.className === 'dropdown-menu') {
        dropmenu.className = 'dropdown-menu responsive'
    }
    else {
        dropmenu.className = 'dropdown-menu'
    }
});