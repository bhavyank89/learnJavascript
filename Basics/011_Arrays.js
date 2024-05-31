// Arrays

// Arrays are made by assingning a square bracket([]) on the right side of assignment operator(=) 

// An Empty Array
let arr1 = [];

// A number Array
let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// A string Array
let stringArr = ['Bhavyank', 'Sarolia'];
let days = ['Monday','Tuesday','Wednesday'];

// A mixed Array
let mixedArr = [89, 'Bhavyank', 76, 'Sarolia'];

/*
        Length Of An Array

    Length of an array can be found using
        arrayName.length
        e.x, >days.length
             <3
*/ 

// Array are also Indexed
// Indexing start with 0 to (No of elements - 1)

/*
    **Accessing Array ELEMENT Using INDEX

    Array element can be accessed using index as
                arrayName[index]
        e.x,    >days[2]
                <'Wednesday'

    **Accessing First Character of array Element Using Index
                arrayName[index of Element][Index of character]
        e.x,    >days[2][3] -->Thired Character index of second index element
                <'n'

    
    **Accessing INDEX Using Array ELEMENT

    Array element can be accessed using index as
                arrayName.indexOf('character or element')
        e.x,    >days.indexOf('Wednesday')
                <2
                >days.indexOf(' ')
                <-1
*/

/*
    UPDATING ARRAY ELEMENT

--------------------- Checking By Updating A String -------------------------    
    let aString = "bhavyank";
    undefined
    
    aString[0] = 'B'; //Trying to update aString index 0 to 'B'
    'B'
    
    aString  //but aString does not update
    'bhavyank'

-----------------------------------------------------------------------------


------------------ Updating An Array  ---------------------------------------

    let colorArr = ['rad','orange','yellowww'];
    undefined

    colorArr[0] = 'red'; //updating 'rad' to 'red' in array colorArr
    'red'

    colorArr    //It got updated
    ['red', 'orange', 'yellowww']

    colorArr[2] = 'yellow'; //updating 'yellowww' to 'yellow' in array colorArr
    'yellow'

    colorArr    //It got updated
    ['red', 'orange', 'yellow']

    colorArr[1] = '76'; //updating 'orange' to '76' in array colorArr
    '76'

    colorArr    //It got updated
    ['red', '76', 'yellow']


--------------------------------------------------------------------------------


---------------- Adding Element's to Higher Index -----------------------------


    let colors = ['red','76','yelow'];
    undefined


    colors[5] = 'indigo';
    'indigo'

    colors
    ['red', '76', 'yelow', empty × 2, 'indigo']

    colors[4];
    undefined

*/

