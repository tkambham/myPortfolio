document.querySelectorAll('.project-img').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.querySelector('.overlay');
        const overlayContent = document.querySelector('.overlay-content');

        // Set the content of the overlay
        overlayContent.querySelector('h2').textContent = this.closest('tr').querySelector('h2').textContent;
        overlayContent.querySelector('.overlay-left p').textContent = this.closest('tr').querySelector('.more-info p').textContent;
        overlayContent.querySelector('.overlay-image').src = this.src;

        // Set the background of the right section to the clicked image
        overlayContent.querySelector('.overlay-right').style.backgroundImage = `url(${this.src})`;
        overlayContent.querySelector('.overlay-right').style.backgroundSize = 'cover';
        overlayContent.querySelector('.overlay-right').style.backgroundPosition = 'center';

        overlay.style.display = 'flex'; // Show overlay
    });
});

function closeOverlay() {
    document.querySelector('.overlay').style.display = 'none'; // Hide overlay
}
