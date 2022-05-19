"use strict";
// console.log('Hello, ASYNC!');
function a(b) {
    console.log('loading...');
    const name = 'Ivan';
    // ........
    setTimeout(() => {
        b(name);
    }, 7000);
}
a((loadedName) => {
    console.log('received data:' + loadedName);
});
