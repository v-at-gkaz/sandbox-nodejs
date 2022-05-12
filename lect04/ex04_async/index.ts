// console.log('Hello, ASYNC!');

function a(b: any){
   console.log('loading...');
   const name = 'Ivan';
   // ........
   setTimeout(()=>{
       b(name);
   }, 7000);
}

a((loadedName: string) => {
    console.log('received data:' + loadedName);
});