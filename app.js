const navBtn = document.querySelector('#navBtn');
const cancelBtn = document.querySelector('#cancelBtn');
const sideNav = document.querySelector('#sideNav');
const modal = document.querySelector('#modal');


navBtn.addEventListener('click', () => {
    sideNav.classList.add('show');
    modal.classList.add('showModal');

});

cancelBtn.addEventListener('click', () => {
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});


window.addEventListener('click', (e) => {
    if (e.target === modal) {
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});





