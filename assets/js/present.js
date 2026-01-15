const lid = document.getElementById('lid');
const present = document.getElementById('present'); 
const stickerCat = document.getElementById('sticker-cat');
const surpriseBtn = document.getElementById('surprise-btn');
const overlay = document.getElementById('surprise-overlay');
const closeSurprise = document.getElementById('close-surprise');

surpriseBtn.addEventListener('click', () => {
  overlay.classList.add('active');
});

closeSurprise.addEventListener('click', () => {
  overlay.classList.remove('active');
  lid.classList.remove('active');
  stickerCat.classList.remove('active');
  present.classList.remove('active');
});

present.addEventListener('click', () => {
  present.classList.toggle('active'); 
  lid.classList.toggle('active');
  stickerCat.classList.toggle('active');
});