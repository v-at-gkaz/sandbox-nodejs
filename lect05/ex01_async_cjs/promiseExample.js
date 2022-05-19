function getDateNow(timeout, title){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log(`Title: ${title}`);
            const dateNow=Date.now();
            if (true) {
                resolve({dateNow: dateNow});
            } else {
                reject({error: 'dateNow%2 is 0'});
            }
        }, timeout);  
    });
}

// var 1
// getDateNow(500, 'First').catch((error)=>{
//     console.log('rejected!!!');
// }).finally(()=>{
//     getDateNow(1000, 'Second').catch((error)=>{
//         console.log('rejected!!!');
//     }).finally(()=>{
//         getDateNow(700, 'Third').catch((error)=>{
//             console.log('rejected!!!');
//         });
//     });
// });


// var 2

const promises = [getDateNow(500, 'First'), getDateNow(1000, 'Second'), getDateNow(700, 'Third')];

Promise.all(promises).then((results)=>{
    console.log('Results', results);
}).catch((error)=>{
    console.log('Error?', error);
}).finally(()=>{
    console.log('Что-то ползеное после выполнения всех промисов из массива');
});
