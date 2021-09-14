console.log("/n ##### Exemples de conditions ##### /n");

var isAvailable = false;
// exemple of a condition with a boolean value
if(isAvailable === true) {
    console.log("meuble disponnible");
}
else {
    console.log("meuble indisponible");
}

var price = 200;

if(price < 50) {
    console.log("bas de gamme");
}
else if(price >= 50 && price <= 150) {
    console.log("moyenne gamme");

}
else {
    console.log("haut de gamme");
}

if (true) {
    console.log("Condition is working !");
  }
if (false) {
    console.log("Condition is working !");
  }
else {
    console.log("Condition is not working !");
  }
if (false === false) {
    console.log("Condition is working !");
  }

  var content = 123;

if (content) {
  console.log("Condition is OK");
}
else {
  console.log("Condition is KO");
}


var price = "fourty five";

if (price === 45) {
    console.log("The price is a number");
  }
  else if (price == 45) {
    console.log("The price is a string");
  }
  else {
    console.log("The price is something else");
  }


  var age = 35;

  if (age >= 18){
    console.log("Entry allowed");
  }
  else if (age < 18){
      console.log("Entry not allowed");
    }


    var store = ["Walmart", "Colorado", "South-Park", 483,];

    if (store[0] === "Walmart" && store[1] === "Colorado") {
      console.log("The Walmart in South-Park has " + store[3] + " employes");
    }
    else if (store[0] === "Walmart" || store[1] === "Colorado") {
      console.log("Hum this is an other Walmart from Colorado");
    }
    else if (store[0] = "Walmart") {
      console.log("Too bad this is just a Walmart");
    }
    else {
      console.log("test")};    


var meal = {
    "foodType": "meat",
    "cookedAt": 80,
    "temperature": 100
};
if (meal["cookedAt"] === meal["temperature"]) {
    meal["status"] = "Cooked"
}
else if (meal["cookedAt"] < meal["temperature"]) {
    meal["status"] = "Uncooked"
}
else if (meal["cookedAt"] > meal["temperature"]) {
    meal["status"] = "Overcooked"
};
        console.log(meal["status"]);



var number = 42;
  if (number < 0) {
         if (number%2 === 0) {
            console.log("number is even");
          }
          else {
            console.log("number is odd");}
        }
        console.log("Please enter a number at least greater than 0");