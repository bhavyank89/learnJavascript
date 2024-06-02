const userName = document.querySelector('#userName');
const userPass = document.querySelector('#password');
const button = document.querySelector('#submit');
const ul = document.querySelector('#nameList');
const li = document.querySelectorAll('li');

button.addEventListener('click', function (event) {
    event.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = `${userName.value} - ${userPass.value}`;
    ul.append(newLi);
    fname.value = '';
    lname.value = '';
})

ul.addEventListener('click', function (event) {
   console.log(event)
    if (event.target.nodeName === 'LI') {
        event.target.remove();
    }
})

