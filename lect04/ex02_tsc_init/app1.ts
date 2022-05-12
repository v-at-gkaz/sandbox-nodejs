const username1: string = 'Sergey';

// the comment!
function sayHello1(name: string){
    console.log(`Hello, ${name}`);
}

sayHello1(username1);

// tsc hello.ts
// tsc hello.ts -t es2022
// tsc hello.ts -t es2022 --removeComments