function a(cb){
    console.log('func a');
    setTimeout(function(){
        cb();
    }, 3000);
}

function b(cb){
    console.log('func b');
    setTimeout(function(){
        cb();
    }, 1000);
}

a(function(){
    console.log('func cb from a');


    b(function(){
        console.log('func cb from b 1');


        b(function(){
            console.log('func cb from b 2');

            b(function(){
                console.log('func cb from b 3');

                b(function(){
                    console.log('func cb from b 4');
                })
            })

            
        })

    })

})

