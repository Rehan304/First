const name = "Rehan"
const repocount = 5000

//console.log(name + repocount)

//console.log("Hello my name is ${name} and my repocount is ${repocount}");

//console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const GameName = new String ("Rehan-kiGame")

console.log(`The name of my game will ${GameName}`);


// For more try on chrome
/*
console.log(GameName[0])
console.log(GameName.__proto__);


console.log(GameName.length);
console.log(GameName.toUpperCase);
console.log(GameName.toUpperCase())
*/
console.log(GameName.charAt(0))
console.log(GameName.indexOf('R'))
const GameName2 = GameName.substring(0, 4)
console.log(GameName2)

const GameName3 = GameName.slice(-9, 5)
console.log(GameName3)


const newUser = '     PUBG        '
console.log(newUser.trim())

const Url = "https://PUBG.com/P%20UB%20G%20"

console.log(Url.replace('%20','-'))

console.log(Url.includes('Rehan'))

console.log(Url.split('%20'))
