// const formSubmit = document.querySelector("#form");
// const input = document.querySelector('#input');
// const ul = document.querySelector('#animal');

// formSubmit.addEventListener('submit', function (event) {
//     event.preventDefault();
//     let newli = document.createElement('li');
//     ul.append(newli);
//     newli.innerText = input.value;
//     input.value = '';
// })

var userName = documnet.querySelector('.userName');
var userPass = documnet.querySelector('.password');
var orderList = document.querySelector('.userData');
var formSubmit = document.querySelector('.userForm');

// formSubmit.addEventListener('submit', function (event) {
//     event.preventDefault();
//     var newLi = document.createElement('li');
//     newLi.value = `${userName.innerText}-${userPass.innerText}`;
//     orderList.append(newLi);
//     userName.innerText = '';
//     userPass.innerText = '';
// })

formSubmit.addEventListener('submit', function (event) {
    event.preventDefault();
    var newLi = document.createElement('li');
    newLi.value = `${userName.value}-${userPass.value}`;
    orderList.appendChild(newLi);
    userName.value = '';
    userPass.value = '';
})