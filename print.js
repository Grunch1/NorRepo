// 1

var fs = require('fs');

function main(){
   var file  = "hello.txt";
   fs.appendFileSync(file, "Hello world\n");
}

main();

// terminal-um: node print.js
// 2

var fs = require('fs');
var dummyText = "Apple yup";

function main() {
    fs.writeFileSync("dummytext.txt", dummyText);
    var text = fs.readFileSync("dummytext.txt").toString();
    console.log(dummyText = text);
    console.log(text);
    fs.writeFileSync("underdujmmy.txt",
        text.replace("Apple", "Microsoft")
    );
}

main();

// Lesson 3 p 25
var obj = {
    "first_name" : "Vardan",
    "last_name" : "Hovsepyan",
    "age" : 13,
    "tumo_student" : true
    }
var stringfied = JSON.stringify(obj);
var fs = require('fs')
function koil(){
    fs.writeFileSync("fs", stringfied);
}
koil();