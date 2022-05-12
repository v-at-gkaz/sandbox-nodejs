const username2: string = 'Sveta';

// the comment!
function sayHello2(name: string){
    console.log(`Hello, ${name}`);
}

sayHello2(username2);

// tsc hello.ts
// tsc hello.ts -t es2022
// tsc hello.ts -t es2022 --removeComments