console.log("##### exemple of loops #####");

// Wihle loop exemple

var i = 0;
var students = [
    "Théo",
    "Louis",
    "Cécile",
    "Cloé",
    "Brandon",
    "Thimoty"
];

while(i < students.length) {
    console.log(students[i]);
    i++
}
for(var j = 0; j < students.length; j++) {
    console.log(students[j]);
}