var btn1 = document.querySelector('.click1');
var btn2 = document.querySelector('.click2');
var heading = document.querySelector('h3');
var btn3 = document.querySelector('.click3');
var bodyBg = document.querySelector('body');

btn1.innerText = 'Show Text';
btn2.innerText = 'Hide Text';


//Basic Syntex
btn1.onclick = function () { console.log('You Clicked Show Text Button'); heading.style.display = 'block'; }
btn2.onclick = function () { console.log('You Clicked Hide Text Button'); heading.style.display = 'none'; }

btn1.onmouseover = function () { bodyBg.style.backgroundColor = 'lightgreen'; }
btn2.onmouseover = function () { bodyBg.style.backgroundColor = 'white'; }

//Using EventListner
btn1.addEventListener('click', () => { console.log('You Clicked Show Text Button'); heading.style.display = 'block'; })
btn1.addEventListener('mouseover', () => { bodyBg.style.backgroundColor = 'lightgreen'; })

btn2.addEventListener('click', () => { console.log('You Clicked Hide Text Button'); heading.style.display = 'none'; })
btn2.addEventListener('mouseover', () => { bodyBg.style.backgroundColor = 'white'; })

//Running EventListner for paticular Interval of time
function Twist() { console.log('Twist'); }
function Shout() { console.log('Shout'); }

btn3.addEventListener('click', Twist, { once:true });
btn3.addEventListener('click', Shout);