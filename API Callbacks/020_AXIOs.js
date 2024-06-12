axios.get("https://swapi.dev/api/people/1")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })

var starWarPeople = async () => {
    try {
        var response = await axios.get("https://swapi.dev/api/people/2");
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }
}
starWarPeople();