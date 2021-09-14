console.log("/n ##### Exemples de variables ##### /n");

// Exemple of two variables with strings
var userFirstname = "Harold";
var baseSentence = "Bonjour ";

// display of the two variables in the console of the web browser
console.log(baseSentence + userFirstname);
console.log(baseSentence + userFirstname);
console.log(baseSentence + userFirstname);
console.log(baseSentence + userFirstname);
// exemple of variable with incrementation

var age = 35;
console.log(age);
age += 5;
console.log(age);

var isAdulte = false;

var items = ["premier élément", "deuxième élément", "troisième élément", "quatrième élément"];

console.log(items);
console.log(items[1]);
console.log(items[3]);
console.log(items[0]);

var player = ["John", "Doe", 34, true];
console.log(player);
console.log(player[0]);
console.log(player[1]);

player.push(" ");
console.log(player);
console.log(player[0]+player[4]+player[1]);
player[2] = 40
console.log(player);
console.log(player[3]);

var playa = {"firstname": "jack ", "lastname": "smith", "age": 34,"isAdult": true};
console.log(playa);
console.log(playa["firstname"]+playa["lastname"]);
playa["age"] = 40;
console.log(playa);
console.log(playa["isAdult"]);

var car = {
    "type": "clio",
    "brand": "renault",
    "date": 2006,
    "color": "orange",
    "passengers": ["Mike","Claire","Anna","Louis"]
};
console.log(car);
console.log(car["passengers"][0]);
console.log("Une "
    + car["brand"] 
    + " "
    + car["type"] 
    + " de couleur " 
    + car["color"] 
    + " modèle "
    + car["date"]
    + " à été aperçue avec deux passagers.");