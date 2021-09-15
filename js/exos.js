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
