let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let randwho = Math.floor(Math.random()*who.length);
let rvalue = who[randwho];

let randaction = Math.floor(Math.random()*action.length);
let rvalue2 = action[randaction];

let randwhat = Math.floor(Math.random()*what.length);
let rvalue3 = what[randwhat];

let randwhen = Math.floor(Math.random()*when.length);
let rvalue4 = when[randwhen]

let excuse = rvalue + " " + rvalue2 + " " + rvalue3 + " " + rvalue4;

console.log(excuse)