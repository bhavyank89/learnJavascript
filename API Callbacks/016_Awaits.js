const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

async function rainbow() {
    await delayedColorChange('violet', 1000);
    await delayedColorChange('indigo', 1000);
    await delayedColorChange('blue', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('red', 1000);
    return 'ALL Done';
}
rainbow().then((data) => { console.log(data) }); 