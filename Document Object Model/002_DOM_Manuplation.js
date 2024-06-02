//Here we will learn bunch of methods and properties associated
//with the DOM

/*
    ->innerText
        ->returns the content of the element in human redable formate

        >document.querySelector('p').innerText
        'The Silkie (sometimes spelled Silky) is a breed of chicken named for
         its atypically fluffy plumage, which is said to feel like silk and satin. 
         The breed has several other unusual qualities, such as black skin and bones, 
         blue earlobes, and five toes on each foot, whereas most chickens only have four. 
         They are often exhibited in poultry shows, and appear in various colors. 
         In addition to their distinctive physical characteristics, Silkies are well known for 
         their calm, friendly temperament. It is among the most docile of poultry. 
         Hens are also exceptionally broody, and care for young well. 
         Though they are fair layers themselves, laying only about three eggs a week, 
         they are commonly used to hatch eggs from other breeds and bird species due to
          their broody nature. Silkie chickens are very easy to keep as pets. 
          They are suitable for children, but like any pet, should be handled with care.'

        >document.querySelector('#banner').innerText = 'Bhavyank';
            //element with Id of banner, that element's text which is Silkie is now updated to Bhavyank; 
*/

/*
    ->innerContent
        ->returns the content of the element in including <script> and <style>

        >document.querySelector('p').textContent
        'The Silkie (sometimes spelled Silky) is a breed of chicken named for\n
                its atypically fluffy plumage, which is said to feel like silk and satin. 
                The breed has several other unusual qualities, such as\n        black skin 
                and bones, blue earlobes, and five toes on each foot, whereas most chickens 
                only have four. They are\n        often exhibited in poultry shows, and 
                appear in various colors. In\n        addition to their distinctive physical 
                characteristics, Silkies are well known for their calm, friendly\n
                        temperament. It is among the most docile of poultry. Hens are also 
                exceptionally broody, and care for young well. Though they are fair layers 
                themselves, laying only\n        about three eggs a week, they are commonly 
                used to hatch eggs from other breeds and bird species due to their\n
                        broody nature. Silkie chickens are very easy to keep as pets. 
                They are suitable for children, but like any pet,\n        
                should be handled with care.\n 

*/

/*
        ->innerHTML
        //gives the content with the HTML tag including

        >document.querySelector.innerHTML
        'The <b>Bhaqvyank</b> (sometimes spelled <b>Silky</b>) is 
        a <a href="/wiki/List_of_chicken_breeds" title="List of chicken 
        breeds">breed</a> of <a href="/wiki/Chicken" title="Chicken">chicken</a> 
        named for\n        its atypically fluffy <a href="/wiki/Plumage" 
        title="Plumage">plumage</a>, which is said to feel like 
        <a href="/wiki/Silk" title="Silk">silk</a> and satin. 
        The breed has several other unusual qualities, such as\n        
        black skin and bones, blue earlobes, and five toes on each foot, 
        whereas most chickens only have four. They are\n        often exhibited 
        in <a href="/wiki/Poultry" title="Poultry">poultry</a> shows, and 
        appear in various colors. In\n        addition to their distinctive 
        physical characteristics, Silkies are well known for their calm, 
        friendly\n        temperament. It is among the most docile of poultry. 
        Hens are also exceptionally <a href="/wiki/Broodiness" title="Broodiness">broody</a>, 
        and care for young well. Though they are fair layers themselves, laying only\n 
               about three eggs a week, they are commonly used to hatch eggs from other breeds 
        and bird species due to their\n        broody nature. Silkie chickens are very easy 
        to keep as pets. They are suitable for children, but like any pet,\n
                should be handled with care.\n    '



    >document.querySelector('h1').innerHTML = '<i>Bhavyank</i>';
        //h1's inner HTML is changed from Silkie Chickens to Bhavyank Sarolia(i.e, itolasised)

*/

/*

    ->Attribute Manuplation
        >document.querySelector('img').id    //Select's the id of the first img
        'banner'

        >document.querySelector('img').id = 'woops'; //Set the id of banner to woops

    ->getAttribute('attribute')

        >document.querySelector('img').getAttribute('src')
        'https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80'


        >document.querySelector('img').getAttribute('href')
        null

    ->setAttribute('attribute','new value to the attribute')

        >document.querySelector('img').setAttribute('id','woops')
        undefined

        >document.querySelector('a').setAttribute('href','http://www.google.com')
        undefined

*/

/*


*/

const links = document.querySelectorAll('a');
for(link of links){
    link.style.color = 'red';
}