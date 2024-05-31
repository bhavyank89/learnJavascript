//We can create our own javascript method by using object and function



//Syntex - 1
/*
    We can create method by following key - value pair convention of object
    where key   -> function name
    and   value -> function expression
 */
/*

let calculator = {
    add : function(x,y){
        return x + y ;
    },
    multiply : function(x,y){
        return x*y;
    },
    divide : function(x,y){
        return x/y;
    },
    power : function(x,y){
        return Math.pow(x,y);
    },
    subtract : function(x,y){
        return x-y;
    }
}

calculator.add(2,3)
5

calculator.subtract(2,3)
-1

calculator.power(23,45)
1.8956258430116204e+61
*/



//Syntex - 2
/*
    we can also create method by just mentioning 
    the function is place of the key - value pair as follows
*/
/*

let calculator = {
    add(x,y){
        return x + y ;
    },
    multiply(x,y){
        return x*y;
    },
    divide(x,y){
        return x/y;
    },
    power(x,y){
        return Math.pow(x,y);
    },
    subtract(x,y){
        return x-y;
    }
}

calculator.add(2,3)
5

calculator.subtract(2,3)
-1

calculator.power(23,45)
1.8956258430116204e+61
*/