/* There are two types of data in java

           "Primirive"

           It includes string, number, Boolean, null, undefined, infinity and symbol

           "non-Primitive OR reference"

           It includes Array, Objects and functions

           Primirive data types are arranged in stock manners in which we get the copy of our
            main data

           On the other han in non-primitive or referene datat types we get the original data
            file it 
           means changing it will resuklt the change in main data

           Yhe examples are as follows*/

let Userone = "Rehan"

let UserTwo = Userone

UserTwo = "Farhan"

/* As these are considered as strings which are primitive data types
so both Userone and User Two will have their own identities. Let make sue as follows*/

console.log(Userone);
console.log(UserTwo);

/**************************************************************************************/


// Lets take an example from non-primitive or reference data types

let MyaccountNumber = {
    ABL:1234566,

    idcard : 223344,
}
let MyaccountNumber2 = MyaccountNumber

MyaccountNumber2.email="nniaz556@gmail.com"

console.log(MyaccountNumber.email);
console.log(MyaccountNumber2.email);
 
/* as you can see we get the required results but before we leave we should make clear that
in non-primitive data types we have to write .eamil at the console .log part and data changing 
part*/

console.table([Userone, UserTwo, MyaccountNumber.email, MyaccountNumber2.email])