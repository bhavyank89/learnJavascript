//A variable to make request
var request = new XMLHttpRequest();

//What to do when you get response
request.onload = () => {
    console.log("It loaded!!");

    //console.log(this); //-> here this is an object of XMLHttpRequest
    //we need the responseText of XMLHttpRequest which is a JSON
    //console.log(this.responseText) //-> this we output JSON

    //converting JSON to JS Object
    var data = JSON.parse(this.responseText);

    //Escessing the value from the key-value pair of the data
    console.log(data.name, data.height);

}

//What to do when you get an error
request.onerror = () => {
    console.log("Eroor!!");
    console.log(this);
}

request.open("GET", "https://swapi.dev/api/people/1");
request.send();