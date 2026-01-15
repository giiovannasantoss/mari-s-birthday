const body = document.body;
const toggleBtn = document.getElementById('toggle-theme');
const themedImages = document.querySelectorAll('img[data-pink]');

function updateTheme() {
    const isPink = body.classList.contains('theme-pink');

    themedImages.forEach(img => {
        img.src = isPink ? img.dataset.pink : img.dataset.blue;
    })
};

toggleBtn.addEventListener('change', () => {
    body.classList.toggle('theme-blue');
    body.classList.toggle('theme-pink');

    updateTheme();
});
