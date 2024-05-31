//Use of this keyword in Function Methoded in Object
/*
    This Keyword is used to access Object key in the method defined
        in the same Object

    As in here this keyword is used to access name in the function 
    made in Object

    This keyword refers to the current object or constructor.
*/

let cat = {
    name: 'jonny',
    bread: 'tonny',
    msgSays() {
        console.log(`Cat name is ${this.name} and it's bread is ${this.bread}`)
    }
}