const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a,b,c;

function callbackForA(answer){
    a=answer;
    rl.question('Enter b:', callbackForB);
}

function callbackForB(answer){
    b=answer;
    rl.question('Enter c:', callbackFromC);
}

function callbackFromC(answer){
    c=answer;

    showResult();

}

function showResult(){
    console.log('Result:', calculateResult(a,b,c));
    //process.exit(2);
    rl.close();
}

function calculateResult(a,b,c){
    // FIXME: write me...
    return `Please write code for a=${a}, b=${b}, c=${c}`;
}

rl.question('Enter a:', callbackForA);