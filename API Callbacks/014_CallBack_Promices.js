/*
In a request Call Back we have to pass three argument i.e, a url, 
a success function and a failure function.

Also for nested call back request we have to nest the code in success function
the number of times we have to request a call

to prevent such a long code for call back we have a idea of 
REQUESTPROMICES insteed of request Call Back
*/

/*
In requesting a promice, we pass only a single argument i.e, a url is passed
this requestPromice has three stages - resolved(success), pending, rejected(failure)

*/

//Making Function of requestPromice
function fakeRequestPromice(url) {
    return new Promise((resolve, reject) => {
        var delay = Math.floor(Math.random() * 4500) + 500;
        setTimeOut(() => {
            if (delay > 4000) {
                reject('Connection TimeOut....');
            }
            else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, 1000)
    })
}

var request = fakeRequestPromice('books.com');

request
    .then(() => {
        console.log('It Worked');
        console.log('Promise Resolved!!')
    })
    .catch(() => {
        console.log("OO No........");
        console.log("Promise Rejected")
    });


//Syntex One Of Using Promises
/*
    var variableName = new promise(function(resolve,reject){
        //Here goes the code
        //e.g- while feteching any data, data can either be fetched or cannot be 
        fetched due to any of the reason such as poor intenet connection or fetching timeout
        when data is feteched, resolved is called with the data which is fetched
        and when data cannot be fetched reject is colled with the error
    })
*/
var promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Inside PromiseOne!");
        var random = Math.floor(Math.random() * 4);
        if (random <= 1) {
            resolve({ userName: 'Bhavyank Sarolia', emailId: 'bhavyank@example.com' }); //=> an object is fetched as a user data
        }
        else {
            reject(error);
        }
    }, 1000)
})

promiseOne.then(function (user) {
    console.log("Resolved PromiseOne!");
    console.log(`Name     : ${user.userName}`);
    console.log(`Email Id : ${user.emailId}`);
})

promiseOne.catch(function (error) {
    console.log("Promise Rejected!");
    console.log(error);
})

//chaining of promises
var promiseTwo = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Inside PromiseOne!");
        var random = Math.floor(Math.random() * 4);
        if (random <= 1) {
            resolve({ userName: 'Bhavyank Sarolia', emailId: 'bhavyank@example.com' }); //=> an object is fetched as a user data
        }
        else {
            reject(error);
        }
    }, 1000)
})

promiseTwo
    .then(function (user) {
        console.log("Resolved PromiseOne!");
        console.log(`Name     : ${user.userName}`);
        console.log(`Email Id : ${user.emailId}`);

        return user.userName; //=> Returns an argument for the next chained .then
    })
    .then(function (Name) {
        console.log(`UserName  : ${Name}`);
    })
    .catch(function (error) {
        console.log(error);
    })