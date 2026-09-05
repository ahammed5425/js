const accountId = 144553;
let accountEmail = "ahmed@gmail.com"
var accountPassword = "12345";
accountCity = "Hyderabad"; 
let accountState;

//accountId = 2 //not allowed

accountEmail = "myemail@email.com"
accountPassword = "myPassword"
accountCity = "Bangalore"

console.log(accountId)

/*
Prefer not to use var
because of issuse in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword,
     accountCity, accountState])
