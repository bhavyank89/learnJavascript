console.log("I am feteching data")
setTimeout(() => {
    console.log("Data have been fetched....")
}, 3000)
console.log("I am stil feteching the data...................")

//during execution 
/*
    line1 is executed
    line2-4 is fetched and passed to browser API
    line 5 is executed
    after 3 second browser reminds JS to execute line 3
    and then line 3 is executed
*/