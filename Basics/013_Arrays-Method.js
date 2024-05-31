// Arrays Method

/*
----------- arrayName.push() Method -----------------------------------
            Add's element/elements at the end

            
        let fruit = ['Apple','Mango'];
        undefined

        fruit.push('orange');  //Adds orange to the end of the array and return new length of array
        3

        fruit
        ['Apple', 'Mango', 'orange']

        fruit.push('grapes','watermelon'); //Multiple AddOn's
        5

        fruit
        ['Apple', 'Mango', 'orange','grapes','watermelon']
*/

/*
----------- arrayName.pop() Method -----------------------------------
            removes element at the end
            pop does not require argument

            fruit.pop() //Removes Element from the end and gives the end element 
            'watermelon'

            fruit
            ['Apple', 'Mango', 'orange', 'grapes']
            
        
*/

/*
----------- arrayName.unshift() Method -----------------------------------
            Add's element\elements at the start
            
            fruit
            ['Apple', 'Mango', 'orange', 'grapes']

            fruit.unshift('pineapple','greenapple','banana'); //Add's at the start of an array
            7

            fruit
            ['pineapple', 'greenapple', 'banana', 'Apple', 'Mango', 'orange', 'grapes']
            
        
*/

/*
----------- arrayName.shift() Method -----------------------------------
            removes first element at the start
            
            fruit.shift() //Removes first element of an array and display's it
            'pineapple'

            fruit
            ['greenapple', 'banana', 'Apple', 'Mango', 'orange', 'grapes']
*/

/*
-----------------------arrayName1.concat(arrayName2) Method---------------------------
                        forms a new merged array

                        let cats = ['blue','kitty']; //Array of cats
                        undefined

                        let dogs = ['rusty','wayatt']; //Array if dogs
                        undefined

                        let catsAnddogs = cats.concat(dogs); //Does not add dogs to the cats instead form a new array of cats + dogs
                        undefined

                        let dogsAndcats = dogs.concat(cats); //Does not add dogs to the cats instead form a new array of dogs + cats
                        undefined

                        catsAnddogs
                        ['blue', 'kitty', 'rusty', 'wayatt']

                        dogsAndcats
                        ['rusty', 'wayatt', 'blue', 'kitty']
*/

/*
----------- arrayName.includes(element) Method -----------------------------------
            display true if element is found in that array
            display false if element is not found in that array

            dogsAndcats.includes('blue')
            true

            dogsAndcats.includes('Blue')
            false
*/

/*
----------- arrayName.indexOf(element) Method -----------------------------------
            display indexNo if element is found in that array
            display -1 if element is not found in that array

            catsAnddogs.indexOf('rusty');
            2

            catsAnddogs.indexOf('Rusty');
            -1
*/

/*
----------- arrayName.reverse() Method -----------------------------------
            reverses the original array
            It does not require any argument

            catsAnddogs.reverse()
            ['wayatt', 'rusty', 'kitty', 'blue']
*/

/*
----------- arrayName.slice(startIndex , endIndex) Method -----------------------------------
            creates a new array from startingIndex to just one befor endingIndex
            It excludes endIndex

            let fruit = ['greenapple', 'banana', 'Apple', 'Mango', 'orange', 'grapes'];
            undefined

            fruit.slice()
            ['greenapple', 'banana', 'Apple', 'Mango', 'orange', 'grapes']

            let lovelyfruit = fruit.slice(1,4);
            undefined

            lovelyfruit;
            ['banana', 'Apple', 'Mango']

            fruit
            ['greenapple', 'banana', 'Apple', 'Mango', 'orange', 'grapes']

*/

/*
----------- arrayName.splice(startIndex , No Of deleting elements , If added what is the Element) Method -----------------------------------
            Update the array. 
            

            let fruit = ['greenapple', 'banana', 'Apple', 'Mango', 'orange', 'grapes'];
            undefined

            fruit.splice(1,2); //Starting from Index 1, delete two items 
            ['banana', 'Apple']

            fruit
            ['greenapple', 'Mango', 'orange', 'grapes']

            fruit.splice(4,0,'banana','apple'); //Starting from Index no 4, delete 0 elements and add 'banana' and 'apple' from index no 4 and shift the elements at 4 and after
            []

            fruit
            ['greenapple', 'Mango', 'orange', 'grapes', 'banana', 'apple']

            fruit.splice(5,0,'banana','apple'); 
            []

            fruit
            ['greenapple', 'Mango', 'orange', 'grapes', 'banana', 'banana', 'apple', 'apple']

*/