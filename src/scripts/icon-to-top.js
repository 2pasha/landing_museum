const toTopButton = document.getElementById('toTopButton');

window.addEventListener('scroll', () => {
    if (window.scrollY > 470) {
        toTopButton.style.display = 'block';
    } else {
        toTopButton.style.display = 'none';
    }
});
