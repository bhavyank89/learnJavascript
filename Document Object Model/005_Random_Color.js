const body = document.querySelector('body');
const h3 = document.querySelector('h3');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let red = Math.floor(Math.random() * 255 + 1);
    let green = Math.floor(Math.random() * 255 + 1);
    let blue = Math.floor(Math.random() * 255 + 1);

    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    h3.innerText = `rgb(${red},${green},${blue})`;
})

