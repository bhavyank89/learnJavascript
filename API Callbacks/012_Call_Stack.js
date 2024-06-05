const h1 = document.querySelector('h1');
        const body = document.querySelector('body');
        const btn1 = document.querySelector('#btn1');
        const btn2 = document.querySelector('#btn2');

        h1.style.color = '#fff';
        body.style.backgroundColor = '#121212';

        /* setTimeout(()=>{
            body.style.backgroundColor = 'violet';
            setTimeout(()=>{
                body.style.backgroundColor = 'indigo';
                setTimeout(()=>{
                    body.style.background = 'blue';
                    setTimeout(()=>{
                        body.style.backgroundColor = 'green';
                        setTimeout(()=>{
                            body.style.backgroundColor = 'yellow'
                            setTimeout(()=>{
                                body.style.backgroundColor = 'orange'
                                setTimeout(()=>{
                                    body.style.backgroundColor = 'red'
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000) */
        
        let id;
        btn1.addEventListener('click',(e)=>{
             id = setInterval(()=>{
                const randR = Math.floor(Math.random()*225);
                const randG = Math.floor(Math.random()*225);
                const randB = Math.floor(Math.random()*225);
                body.style.backgroundColor = `rgb(${randR},${randG},${randB})`;
            },2000)
        })
        btn2.addEventListener('click',(e)=>{
            clearInterval(id);
        })

        const changeH1Text = function(){
            let text = ['J','a','v','a','s','c','r','i','p','t'];
            let count = 0;
            let textPrint = '';
            
            // Function to add letters
            let addInterval = setInterval(() => {
                    if(count < text.length){
                        textPrint += text[count];
                        h1.innerHTML = `Practice ${textPrint}`;
                        console.log(textPrint);
                        count++;
                    } else {
                        clearInterval(addInterval);
                        // Start removing letters after all have been added
                        let removeInterval = setInterval(() => {
                            if(count > 0){
                                textPrint = textPrint.slice(0, count - 1);
                                h1.innerHTML = `Practice ${textPrint}`;
                                console.log(textPrint);
                                count--;
                            } else {
                                clearInterval(removeInterval);
                            }
                        }, 100);
                    }
                }, 250);
            
        }
        changeH1Text();