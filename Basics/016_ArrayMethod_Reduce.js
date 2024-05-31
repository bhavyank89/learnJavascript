//------------------------ Array Method - Reduce ----------------------------------
//Array Method - Reduce takes some array and reduce it down to a single value
//It itterates each array element and perform some task assigned by a callback function
//It syntex consists of

/*
    Syntex

    let variableName = arrayName.reduce((accumulator,currentvalue) => {
        return //arithmatice operation betwwen accumulator and current value
    })


    -->Initially accumulator is assigned with the index 0 element of the array and 
        currentvalue is assigned with the index 1 of the array

    -->after return statement and arithmatic opertion between accumulator and current value 
       is stored in accumulaotor and current value is incremented by one

    

    -->Finally after all the itteration the final value is stored in the variableName
*/

/*
    const score = [99,78,98,36,88,58,23]

    const totalScore = score.reduce(
        (sumscore,nextscore) => {return sumscore+=nextscore ;}
    )

    totalScore
    480
    
*/

/*
    const minScore = score.reduce(
        (min,score) => {
            if(score<min){
                return score;
            }
            else{
                return min;
            }
        }
    )

minScore
23

*/



/*

        -->To initialise accumulator with a different value, we pass that value as a second
        argument to the reduce method

        e.x-

        const score = [1,2,3,4,7,8,9,10]
        const totalScore = score.reduce( (x,y) => x+y , 100)

        totalScore
        144

*/