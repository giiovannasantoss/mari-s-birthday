const envelope = document.getElementById('envelope');
const closeBtn = document.getElementById('close-letter');

envelope.addEventListener('click', () => {
    envelope.classList.add('open');
});

closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    envelope.classList.remove('open');
});