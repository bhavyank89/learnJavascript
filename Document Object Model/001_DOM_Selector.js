/*
    ->The JavaScript selector syntex is used to select all the DOM elements of
        paticular id/className/tagName

    ->when these selected DOM assigned a variable then this variable behaves as an
        -->object if the selector is by Id
        -->array if the selector is by TagName / ClassName


*/


//-------------------------- Document.getElementById('') --------------------------------------------
/*
    document.getElementById('banner') --> return the HTML of the id = banner
                                      --> if id does not found then returns null

    console.dir( document.getElementById('banner') )    --> returns the HTML as an Object of the id = banner
                                                        --> if id does not found then returns null


    e.x -

    >>document.getElementById('banner')          --> returns an HTML

        <img id=​"banner" src=​"https:​/​/​images.unsplash.com/
         photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiO
        jEyMDd9&auto=format&fit=crop&w=2550&q=80" alt>

    >>const toc = document.getElementById('toc') -->returns an object
      console.dir(toc)

        div#toc
        accessKey : ""
        align : ""
        ariaAtomic : null
        ariaAutoComplete : false
        ...............................
        ..................and many more key values pair



*/


//----------------------------------- document.getElementsByTagName('') ----------------------------------
//----------------------------------- document,getElementsByClassName('') --------------------------------
/*
    document.getElementsByTagName('img') --> return the HTMLCollection of the TagName = 'img'
                                         --> if id does not found then returns an HTML collection with zero elements

    console.dir( document.getElementsByTagName('banner') )    --> returns the HTML as an Object of the TagName = img
                                                              --> if id does not found then returns an HTML collection with zero elements



    e.x -

    >>document.getElementsByTagName('img')      -->returns an HTML Collection which is a look alike an array

        HTMLCollection(4) [img#banner, img.square, img.square, img.square, banner: img#banner]
        0 : img#banner
        1 : img.square
        2 : img.square
        3 : img.square
        banner : img#banner
        length : 4
        [[Prototype]] : HTMLCollection

    --------------------------------------------- Similarly we have document.getElementsByClassName('')

    >>document.getElementsByClassName('square')     --> returns an HTML Collection which is look alike an array

        HTMLCollection(3) [img.square, img.square, img.square]
        0 : img.square
        1 : img.square
        2 : img.square
        length : 3
        [[Prototype]] : HTMLCollection


*/


//We can itterate DOM variables like an array
/*
    e.x-

    >>const images = document.getElementsByTagName('img')
      for(let img of images){
          console.log(img.src)
      }

        https://images.unsplash.com/photo-1563281577-a7be47e20db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
        https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg
        https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png
        https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Partridge_Silkie_hen.jpg/900px-Partridge_Silkie_hen.jpg


*/

//We can even change or ammend any DOM variable like an array
/*
    e.x-

    >>const images = document.getElementsByTagName('img')
      for(let img of images){
          img.src = thisIsARandomImage.jpg
      }

*/


//-------------------------------- document.querySelector('') ---------------------------------------------
/*
      -->querySelector is another method of an DOM which is a combination of all the previous selector
        i.e, Id / TagName / ClassName 

      -->querySelector behaves similar to the previous selector depending upon it's argument
         if the argument is ('TagName') -- then it behaves as an .getElementsByTagName('TagName')
         if the argument is ('#Id')     -- then it behaves as an .getElementById('Id')
         if the argument is ('.Class')  -- then it behaves as an .getElementsByClassName('Class')

      --> **The Only draw Back of the querySelector is that it does not give all the HTML elements
            with the similar class or tag . It gives only the first matched element

            E.X -
            document.querySelector('p')
                <p>​…​</p>​

    
    BUTTTTTTTTT,

      -->above drawback is overrulled by the method called document.querySelectorAll('')

            E.X-
             document.querySelectorAll('p')
                NodeList(2) [p, p]
                0: p
                1: p
                length: 2
                [[Prototype]]: NodeList

                
    
*/