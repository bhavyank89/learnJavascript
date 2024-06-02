const num = 100;

/*Creating h1 */
let createh1 = document.createElement('h1');    //Creating h1
createh1.innerText = 'Our Pokemon Sprite✌️';    //Adding Content to h1
document.querySelector('body').prepend(createh1);   //Adding it to the body


/*Inserting Image */
for (let i = 1; i <= 150; i++) {
    let newImg = document.createElement('img');
    newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
    document.querySelector('.container').appendChild(newImg);
}