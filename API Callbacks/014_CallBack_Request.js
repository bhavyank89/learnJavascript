//Function that search a Url
//argument of the function is a url,a function success,a function failure
/*
    if the searching takes long time(i.e, delay is greater than 4000 ms) than
    it calls failure function with an argument( connection timeout :( ) otherwise 
    it calls success function with argument( here is your fake data from ${url} )
*/

function fakeRequestCallBack(url, success, failure) {

    var delay = Math.floor(Math.random() * 8000 + 1);

    setTimeout(() => {
        if (delay >= 4000) {
            failure("Connection Lost...........");
        }
        else {
            success(`Here is your data from ${url}`);
        }
    }, 1000);

}

/*
    During this function call,
    we pass a url and a success function and a failure function
*/

//Branching of Call back request
//First Call back Request
fakeRequestCallBack('books.com',
    function (SRM) {  //SRM - SuccessResponseMessage
        console.log('It Worked');
        console.log(SRM);

        //Second Call Back Request
        fakeRequestCallBack('books.com/page1',
            function (SRM) {  //SRM - SuccessResponseMessage
                console.log('It Worked(2nd CB)');
                console.log(SRM);

                //Thired Call Back Request
                fakeRequestCallBack('books.com/page3',
                    function (SRM) {  //SRM - SuccessResponseMessage
                        console.log('It Worked(3nd CB)');
                        console.log(SRM);

                    },
                    function (EM) {     //EM - ErrorMessage
                        console.log(EM);
                    })

            },
            function (EM) {     //EM - ErrorMessage
                console.log(EM);
            })

    },
    function (EM) {     //EM - ErrorMessage
        console.log(EM);
    })