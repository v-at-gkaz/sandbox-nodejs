const art = require('ascii-art');

art.font("APP", "Doom", (err, asciiText) => {
    if(err){
        return;
    }
    console.log(asciiText);
});