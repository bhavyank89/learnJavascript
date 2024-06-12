//-------------------------------- CallBack ----------------------------------------------------------
//creating asyncronous programming using callBack concept
//creating a fake API which recives a request by when a call is made to callBackRequest() function 
// and in return send a response based on the time taken by the API to fetch data

/*
    function callBackRequest(url, success, failure) {
        console.log(`Fetching data from : ${url}`);
        setTimeout(() => {
            const delay = Math.floor(Math.random() * 4000 + 1);
            if (delay < 2000)
                success(url);
            else
                failure(url);
        }, 1000);
    }

    callBackRequest('BOOKS.com'
        , (url1) => {
            console.log(`Here is you data from : ${url1}`);
            callBackRequest('BOOKS/1.com'
                , (url2) => {
                    console.log(`Here is you data from : ${url2}`);
                }
                , (url2) => {
                    console.log(`Cannot fetch data from : ${url2}`);
                }
            )
        }
        , (url1) => {
            console.log(`Cannot fetch data from : ${url1}`);
        }
    )
*/


//--------------------------------------- Promises -----------------------------------------------------------
//creating asyncronous programming using promise concept
//creating a fake API which recives a request by when a call is made to 
//promiseRequest() function and in return send a response based on the time taken by the API to fetch data
/*
    function promiseRequest(url) {
        return promise = new Promise((resolve, reject) => {
            const delay = Math.floor(Math.random() * 4000 + 1);
            if (delay < 2000)
                resolve(url);
            else
                reject(url);
        })
    }

    promiseRequest('BOOKS.com')
        .then((url1) => {
            console.log(`Here is your data from : ${url1}`);
            promiseRequest('BOOKS/1.com')
                .then((url2) => {
                    console.log(`Here is your data from : ${url2}`);
                })
        })
        .catch((error) => {
            console.log(error);
        })
*/


//----------------------------------------- Async Await --------------------------------------------------
//creating asyncronous programming using Async-await concept
//creating a fake API which recives a request by when a call is made to 
//asyncAwaitRequest() function and in return send a response based on the time taken by the API to fetch data

/*
    //hello is an asyncronous function which returns a promise with a resolved value equal to the return value
    async function hello() {
        return "helloWorld";
    }

    //hello1 is an asyncronous function which returns a promise with a reject value equal to the throw value
    async function hello1() {
        throw "Errrrrorrr!!!";
    }

    //Hendling the resolved and rejected value
    hello().then((res) => { console.log(res) });
    hello1().catch((error) => { console.log(error) });


    //the fetching data example
    function fetchData(url) {
        return new Promise((resolve, reject) => {
            const delay = Math.floor(Math.random() * 4000 + 1);
            if (delay < 2000)
                resolve(url);
            else
                reject(url);
        })
    }

    async function asyncAwaitRequest() {
        try {
            const data1 = await fetchData('BOOKS.com');
            console.log(`Here is your data form : ${data1}`);
            const data2 = await fetchData('BOOKS/1.com');
            console.log(`Here is your data from : {data2}`);
        } catch (error) { console.log(error) };
    }
*/


//---------------------------------------- AJAX -----------------------------------------------------
/*
    AJAX - Asyncronous Javascript and XML
    AJAX is a mechanism for making partial page update.
    It enables you to update section of page with data that comes
    from the server, avoiding full page refresh

    Browser consists of an object called XMLHttpRequest.
    This object is use to send and recieve request to the server
*/

/*
    sending request to a server using XMLHttpRequest
*/

/*
//Creating XMLHttpRequest object
    const request = new XMLHttpRequest();

//Opening the HttpRequest by request.open("ParameterOne","ParameterTwo");
//ParameterOne -> HttpMethod (GET,POST,DELETE,PUT,PATCH)
    request.open("GET", "https://swapi.dev/api/people/1");

//Sending the request
    request.send()  //->If method is GET
    // request.send(`someData`)    //->If method is POST
*/


/*
    when request is send we can either receive a response or we can get an error
    to distinguish between response and error we use two key to the XMLHttpRequest object that is
    onload and onerror.
    We have to assign a function to these key as assigned below.
*/

/*
    request.onload = () => {

        //Gives XMLHttpRequest object consisting different key-value pair
        console.log(request);

        //parsing the JSON that is request.responseText
        //Now data becomes an object
        var data = JSON.parse(request.responseText);
        console.log(data.name);
        console.log(data.height);

    }
    request.onerror = (error) => { console.log(error) };

*/

/*
    when we recieve a response we get an object which consists of different key
    To get the actual data that is important to use we .responseText
    This responseText is a JSON (Javascript Object Notation)
    JSON is same as object but the only difference is JSON's key is also enclosed withing quotes
    but like a javascript object we cannot access it's inner key-value pair
    Hence we access key-value pair from JSON we must prase JSON to js object by using as inbuit method
    JSON.prase(request.response) and store it into a variable.
*/

//--------------------------------- Fetch --------------------------------------------------------
/*
    similar to XMLHttpRequest, fetch also allow to make network request similar to XMLHttpRequest
    The main difference between fetch and XMLHttpRequest is that fetch uses promises, hence avoiding callbacks

    as in XMLHttpRequest we use two methods onload and onerror depending upon the response of the server,
    since fetch returns a promise in response through a server, we use .then() and .catch() method or
    async and await method
*/

//                        __Using .then() and .catch() method__
/*
    const URL = "https://swapi.dev/api/people/1";
    const request = fetch(URL); //->Returns a promise

    //This is a promise
    console.log(request);   //->Promise with a responseValue to be an object

    // Handling the promise
    request
        .then((response) => {
            console.log(response);  //->This response is an object
            return response.json(); //->To get the actual data we have to use method .json() --> this return an object
        })
        .then((response) => {
            console.log(response);  //-->This is the object
            console.log(response.name, " ", response.height);
        })
        .catch((error) => {
            console.log(error)
        })
*/

//                      __Using Async and Await method__

/*
    const URL = "https://swapi.dev/api/people/1";

    const starWarPeoples = async () => {
        try {
            const request = await fetch(URL);
            const responseObject = await request.json();
            console.log(responseObject);
            console.log(responseObject.name, " ", responseObject.height);
        }
        catch (error) {
            console.log(error);
        }
    }

    starWarPeoples();
*/


//------------------------------------ AXIOs ---------------------------------------------------
/*
    A tired way of HTTP request is by using a third party library called AXIOs
    AXIOs is a library for making HTTP request
    AXIOs uses fetch in their backend for making HTTP request
*/

//Also to use Axios we have to include this in the HTML file as
//<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

//                         __Using .then() and .catch() method__
/*
    const URL = "https://swapi.dev/api/people/1";
    const request = axios.get(URL); //-->Returns a promise with a promise value beign an object

    request
        .then((response) => {
            console.log(response);  //-->This is an object
            return response.data;   //-->To get data out from object
        })
        .then((data) => {
            console.log(data.name, " ", data.height);
        })
        .catch((error) => {
            console.log(error);
        })

*/

//                      __Using Async and Await method__
/*
    const URL = "https://swapi.dev/api/people/1";

    const starWarPeople = async () => {
        try {
            const request = await axios.get(URL);
            const data = await request.data;
            console.log(data);
            console.log(data.name, " ", data.height);
        } catch (error) {
            console.log(error);
        }
    }

    starWarPeople();
*/
