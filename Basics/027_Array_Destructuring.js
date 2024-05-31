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
    fname : "Bhavyank",
    lname : "Sarolia",
    branch : "ECE-Core",
    email : "bt22ece076@iiitn.ac.in",
    password : "BT22ece076@Bhav"
}


-------------------- Syntex 1 Example ----------------------------------------------------

const {email} = user;

email
'bt22ece076@iiitn.ac.in'


const {email , fname , lname} = user;

email
'bt22ece076@iiitn.ac.in'

lname
'Sarolia'

fname
'Bhavyank'


------------------- Syntex 2 Example -----------------------------------------------

const {email: Email_Id , fname: FirstName , lname: LastName} = user;

Email_Id
'bt22ece076@iiitn.ac.in'

FirstName
'Bhavyank'

LastName
'Sarolia'


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
'Bhavyank Sarolia'

*/