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


try {
    const res1 = await getDateNow(1000, 'First');
    console.log('res1', res1);
    const res2 = await getDateNow(8000, 'Second');
    console.log('res2', res2);
    const res3 = await getDateNow(700, 'Third');
    console.log('res3', res3);
} catch(e){
    console.log('Error?', e);
}