//Using fetch to get data from JSON in JS
fetch("https://swapi.dev/api/people/1") //-->Returns an promise
    .then((response) => {
        console.log("Data Fetched!!!");
        // console.log(response);
        return response.json(); //->Used to retrive responseText i.e, JSON
        //-> it also retun promise 
    })
    .then((responseData) => {
        console.log(responseData, responseData.name, responseData.height);
    })
    .catch((error) => {
        console.log("Cannot fetch data!!!!");
        // console.log(error);
    })

//Feteching using shortHand of promise i.e, Using Async and Awaits
var starWarPeoples = async () => {
    try {
        var response1 = await fetch("https://swapi.dev/api/people/1");
        var responsedata1 = await response1.json();
        console.log(responsedata1, responsedata1.name, responsedata1.height);
    }
    catch (error) {
        console.log("Cannot fetch data!!!!");
        // console.log(error);
    }
}
starWarPeoples();