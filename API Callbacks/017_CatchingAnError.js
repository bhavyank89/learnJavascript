const fakePromise = (url) => {
    return new Promise(function (resolve, reject) {
        var rand = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (rand > 4000) {
                reject('Connection TimeOut!!');
            }
            else {
                resolve(`Here is you fake data from : ${url}`);
            }
        }, 1000)
    })
}

async function makeTwoRequest() {
    try {
        let data1 = await fakePromise('books.com/page1');
        console.log(data1);
        let data2 = await fakePromise('books.com/page2');
        console.log(data2);
    }
    catch (error) {
        console.log('Caught an Error');
        console.log(error);
    }
}