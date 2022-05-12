"use strict";
const username1 = 'Sergey';
// the comment!
function sayHello(name) {
    console.log(`Hello, ${name}`);
}
sayHello(username1);
// tsc hello.ts
// tsc hello.ts -t es2022
// tsc hello.ts -t es2022 --removeComments
