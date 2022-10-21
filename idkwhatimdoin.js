// console.log("hello3");
// //x=10;
// //x.stopit=100;
// //console.log(x)
// //x.stopit.bro();
// try{
//     throw new Error("WHat??")
// }
// catch(err){
//     console.log("Got an aerror: "+err.message);
//     throw err;
// }
// finally{
//     console.log("FVHFDBJCVFGJJFJFJFJFJJFJFUCKYOUFUCKYOUFUCKYOUDIEDIEDIEDIEDIEDIEDIEDIDDHAJVFDASVJDBSJVA");
// }

console.log("hello3");

const fs = require('fs');

let data = fs.readFileSync('data.txt', { encoding: 'utf8'});

console.log(data);

let data2 = fs.readFile('data2.txt', { encoding: 'utf8'}, (err, data) => {
    console.log("done reading file");
    console.log(err.message);
    console.log(data);
});

console.log("Woohooo!!!");

// function anotherfunction()
// {
//     console.log("another");
//     x.stopit.bro();
//     console.log("finishing another");
// }

// function whatever()
// {
//     console.log("whatever");
//     try {
//         anotherfunction();
//     }
//     catch(err) {
//         console.log("got error, but it's gonna be ok: " + err.name);
//         throw err;
//     }
//     finally {
//         console.log("But a really need to do this!!");
//         y.foo()
//     }
//     console.log("finishing whatever");
// }

// // x.stopit.bro();

// try {
//     console.log("About to call whatever");
//     // throw new Error("This is a generic error");
//     whatever();
//     console.log("back from call to whatever");
// }
// catch (err) {
//     console.log("Got an error: " + err.message);
// }

// console.log("byeeee");