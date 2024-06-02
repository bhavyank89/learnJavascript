// KeyBoard Event
document.querySelector('input').addEventListener('keydown', (e) => {
    console.log(e.key);
    console.log(e.code);
})

// KeyBoard Event for paticular keypress using Switch statement
window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'KeyW': console.log(e.code); break;
        case 'ArrowUp': console.log(e.code); break;
        case 'KeyS': console.log(e.code); break;
        case 'ArrowDown': console.log(e.code); break;
        case 'KeyA': console.log(e.code); break;
        case 'ArrowLeft': console.log(e.code); break;
        case 'keyD': console.log(e.code); break;
        case 'ArrowRight': console.log(e.code); break;
    }
})
