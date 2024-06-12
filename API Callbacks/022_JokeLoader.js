var jokesBtn = document.querySelector('button');
var jokesPara = document.querySelector('ul');

var callDadJokes = async () => {

    var jokeIs;

    try {
        //Used to create header
        var config = { headers: { accept: 'application/json' } };

        //getting axios response
        var response = await axios.get("https://icanhazdadjoke.com/", config);
        jokeIs = response.data.joke;
    }
    catch (error) {
        jokeIs = "Could Not load the Joke";
    }

    //appending new jokes to ul
    var newJoke = document.createElement('li');
    newJoke.innerText = jokeIs;
    jokesPara.append(newJoke);
}

//calling DadJokes on clicking button
jokesBtn.addEventListener('click', () => {
    callDadJokes();
})