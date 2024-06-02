const para = document.querySelector('p');
const section = document.querySelector('section');
const button = document.querySelector('button');
button.addEventListener('click', function (event) {
    event.stopPropagation();
})
section.addEventListener('click', function (event) {
    para.classList.toggle('hide');
})