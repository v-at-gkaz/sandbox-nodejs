const username: string = 'Sergey';

// the comment!
function sayHello(name: string){
    console.log(`Hello, ${name}`);
}

sayHello(username);

// tsc hello.ts
// tsc hello.ts -t es2022
// tsc hello.ts -t es2022 --removeComments