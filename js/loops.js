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

// while(i < students.length) {
//     console.log(students[i]);
//     i++
// }
// for(var j = 0; j < students.length; j++) {
//     console.log(students[j]);
// }

for(var student of students) {
    console.log(student);
}


for(var index in students) {
    console.log("Etudiant numéro: " + (parseInt(index) + 1) + " "+ students[index]);
}

var human = {
    "name" : "Henry",
    "age" : 45,
    "sexe" : "male",
    "country" : "France"
};
for(var key in human) { 
    console.log(key + " : " + human[key]);

}



  




