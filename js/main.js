const shareButton = document.querySelector('[data-share]');
const box = document.querySelector('[data-box]');

console.log(box);

shareButton.addEventListener('click',() => {
    shareButton.classList.toggle('rotateBox');
    box.classList.toggle('scaleBox');
})