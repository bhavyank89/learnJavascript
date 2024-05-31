//------------- Destructuring an Array -------------------------------
/*

    Syntex of destructuring an array
    const [variableNames] = arrayName;


const raceResults = ['John','ram','shyam','tina','charl'];

const [gold,silver,bronze,...everyone] = raceResults; //This is destructuring an array

gold
'John'

silver
'ram'

bronze
'shyam'

everyone
['tina', 'charl']

*/

/*
//------------------ Destructuring an Object -------------------------------------------------

    Syntex of Destructuring of object
    const {keyOfObject} = objectName;

    or

    const { keyOfObject : VariableName } = objectname;

    or

    const { keyOfObject = 'defaultValue' } = objectname;

const user = {
    fname : "John",
    lname : "deow",
    branch : "ECE-Core",
    email : "bhavyank.in",
    password : "121212"
}


-------------------- Syntex 1 Example ----------------------------------------------------

const {email} = user;

email
'bhavyank.in'


const {email , fname , lname} = user;

email
'bhavyank.in'

lname
'deow'

fname
'John'


------------------- Syntex 2 Example -----------------------------------------------

const {email: Email_Id , fname: FirstName , lname: LastName} = user;

Email_Id
'bhavyank.in'

FirstName
'John'

LastName
'deow'


------------------ Syntex 3 Example ----------------------------------------------

const {email: Email_Id , fname: FirstName , lname: LastName , Admin = 'No'} = user;

Admin
'No'
*/


/*
//-------------------------- Destructuring Function Parameters -------------------------


function fullName( {fname , lname} ){
    return `${fname} ${lname}`;
}

fullName(user)
'John deow'

*/
