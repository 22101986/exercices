function product(a, b) {
return(a*b) 

};
product(4, 30);


// ###### exercice deux #####

var i = 0;
function showDigits() {

   for(i = 0; i < 10; i++) {
       console.log(i);
   }
};
showDigits();

/// ##### exercice trois #####


function welcome(firstname = "john" , lastname = "doe"){

    console.log("Welcome to our sit " + firstname + " " + lastname);
};

welcome();

// ##### exercice quatre

function isAdult(age){

    if(age < 18) {
        console.log(true);
    }
    else { 
        console.log(false);
    }
};
 isAdult(11);

//  ##### exercice cinq


function birthYear(a) {
    if(a >= 1){
        console.log(2021 - a);
    }
    else { 
        console.log("No age given");
    }
};

birthYear(35);


// ##### exercice six

var user = {
    "firstname": "John",
    "Lastname": "doe",
    "age": 42,
    "job": "dev"
};

function identityCard(firstUser = {
    "firstname": "diana",
    "lastname": "brown",
    "age": 33,
    "job": "doctor" 
}){
    for(var key in firstUser) {
        console.log(key +": " + firstUser[key]);
    }
};
identityCard(user);
identityCard();
 
