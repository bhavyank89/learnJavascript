//callback
function sum(a, b) { console.log(a + b); }
function calculator(a, b, sum) { sum(a, b); }

//callback request
console.log("Inside callBack request");
function callBackReq(url, success, failure) {
    const delay = Math.floor(Math.random() * 4000);
    if (delay < 2000) {
        success(url);
    }
    else {
        failure(url);
    }
}

callBackReq('BOOKS.com',
    function success(url) {
        console.log(`Here is your data from ${url}`);
        callBackReq('BOOKS/1.com',
            function success(url) {
                console.log(`Here is your data from ${url}`);

            },
            function failure(url) {
                console.log(`Error : ${url}`);
            })
    },
    function failure(url) {
        console.log(`Error : ${url}`);
    })

//callBack promises
console.log("Inside callback promise");

//This is how we create promise
let createPromise = new Promise((resolve, reject) => {
    //This code to be runned;
    // resolve('success');
    reject('error');
})
//but in reality a promise is not created by us,
//instead we get a promise when we fetch data from an API
//if our request is under process then we get a pending promiseStatus
//if our request is fulfilled then we get a fulfilled/resolved promiseStatus
//if our request is rejected then we get a rejected promiseStatus

//Now once we recive a promise then our code react on the promiseStatus recieved
//This reaction can be accomplished as
//if promiseStatus is resolved use .then((res)=>{})
//if promiseStatus is rejected use .catch((error)=>{})

function callBackPromise(url) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4000);
        if (delay < 2000) {
            resolve(url);
        }
        else {
            reject('error');
        }
    })
}

callBackPromise('BOOKS.com')
    .then((url) => {
        console.log(`Here is you data from ${url}`);
        callBackPromise('BOOKS1.com')
            .then((url) => {
                console.log(`Here is you data from ${url}`);
            })
    })
    .catch((error) => {
        console.log("Caught error");
    })