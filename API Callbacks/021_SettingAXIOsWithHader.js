// Setting AXIOs with header

var callDadJokes = async () => {


    var config = { headers: { accept: 'application/json' } };


    var response = await axios.get("https://icanhazdadjoke.com/", config);

    //consoling the jokes
    console.log("Joke Says : ", response.data.joke);
}
callDadJokes();