const buyBtns = document.querySelectorAll('.js-buy-tickets');
const modal = document.querySelector('.js-molda');
const moldaClose = document.querySelector('.js-close');
const moldaContainer = document.querySelector('.js-container');

moldaClose.addEventListener('click', () => {
    modal.classList.remove('open');
});

modal.addEventListener('click', () => {
    modal.classList.remove('open');
});

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', () => {
        modal.classList.add('open');
    })
}

moldaContainer.addEventListener('click', (event) => {
    event.stopPropagation();
});