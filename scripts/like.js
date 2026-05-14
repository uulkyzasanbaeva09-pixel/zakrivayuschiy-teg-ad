const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');
iconButtonArray.forEach((iconButton, index) => {
  iconButton.onclick = () =>
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
});
likeButtonArray.forEach((button, index) => {
  button.onclick = () => toggleIsLiked(likeHeartArray[index], button);
});
function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}
function setButtonText(heart, button) {
  if ([...heart.classList].includes('is-liked')) {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Unlike'),
      500
    );
  } else {
    setTimeout(
      () => (button.querySelector('.button__text').textContent = 'Like'),
      500
    );
  }
}
const saveMemoryBtn = document.getElementById('saveMemoryBtn');
const modalOverlay  = document.getElementById('modalOverlay');
const modalOkBtn    = document.getElementById('modalOk');
saveMemoryBtn.addEventListener('click', () => {
  modalOverlay.classList.add('is-visible');
});
modalOkBtn.addEventListener('click', () => {
  modalOverlay.classList.remove('is-visible');
});
modalOverlay.addEventListener('click', (e) => {
  if (e.target
 === modalOverlay) {
    modalOverlay.classList.remove('is-visible');
  }
});
