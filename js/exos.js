console.log("/n##### exercices boucles 2#####/n");

var i = 0;

for(var i = 0; i <= 100; i++) {

    if (i%2) {
        console.log(i + " even");
    }
    else {

        console.log(i + " odd");
    }
};

var items = [
    "First item",
    "Second item",
    "Third item",
    "fourth item"
]
for (var i=0; i < 5; i++) {
    console.log(items[i]);
  }

  customers = [
    "Albin Term",
    "Anna Sandgrove",
    "John Doe",
    "Terrance Head",
    "Yan Mock",
    "Zoe Durst"
  ];
  console.log("List of all customers : <br>");
  for (i=1; i <= 1; i++) {
    console.log(customers + "<br>"); }
    var items = [
        "First item",
        "Second item",
        "Third item",
        "fourth item"
    ];

    for(var item of items) {
        console.log(item);
    };

    var citizen = { 
        "firstname": "John",
        "lastname": "Doe",
        "age": 45,
        "income": 60000,
        "sexe": 0
    }
    
    console.log("Citizen identity :");
for (var key in citizen) {
  if (key === "sexe") {
    if (citizen[key]) {
      console.log(key + " : female");
    }
    else {
      console.log(key + " : male");
    }
  }
  else {
    console.log(key + " : " + citizen[key]);
  }

    }
    var citizens = [
        {
          "firstname" : "John",
          "lastname" : "Doe"
        },
        {
          "firstname" : "Anna",
          "lastname" : "Molner"
        },
        {
          "firstname" : "Harry",
          "lastname" : "Trueman"
        },
        {
          "firstname" : "Cecile",
          "lastname" : "Mercier"
        }
      ];

for (var citizen of citizens) {
  console.log("Citizen : ");
  for (var key in citizen) {
    console.log(key + " : " + citizen[key]);
  }
  console.log("\n");
}


var number = 12.5848554;

;
 
console.log(Math.round(number));

console.log(number.toFixed(2));

var age = "35";
console.log(typeof age);
console.log(parseFloat(age));

console.log(age);

var texte = "Hello evrybody";
var maxLength = 20;
console.log(texte.length)

function length() {
  if(texte.length > maxLength) { 
    console.log("your text is too long");}
  else{ 
    console.log("ok");
  
  }
}
length();

var text = "A nice boat";
console.log(typeof text);
console.log(text.split(" "));
// #######


var name = "Paul Dumas";
var expectedName = "paul dumas";

name.toLowerCase();

if (name === expectedName) {
  console.log("OK Paul you can come in");
}
else {
  console.log("We do not know you");
}
// name toUpperCase = majuscules


var newStudent = "Ryan Oper";
var students = ["john Doe", "Jane Doe", "Marc Alm","Jimmy Turner"];

console.log(newStudent);
console.log(students);

students.push(newStudent);

console.log(students);
students.push("franck Martin","Tom Hawkins");
console.log(students);

// ########

var transactions = [102, 50, 4563, 42, 78, 146, 10563];
var researched = 44;
console.log(transactions.includes(researched));
if(transactions.includes(researched)) {
  console.log("We found a matching transaction");
}
else { 
  console.log("no match");
}
var students = ["john","jack","danny","zach","abegail"];



console.log(students);

students.sort();

console.log(students);

console.log(students[4]);
