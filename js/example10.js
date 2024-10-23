// Skapa en dictionary med bracket-notation. Samt en funktion som lägger till key och value till dictionary

  const myDictionary = {}


function addToDictionary(dictionary, key, value) {
    // I det här fallet vill man använda sig av bracketnotation eftersom key blir som en variabel
     dictionary[key] = value;
}

addToDictionary(myDictionary, "hej", "hello");
addToDictionary(myDictionary, "bord", "table");
addToDictionary(myDictionary, "sol", "sun");
addToDictionary(myDictionary, "cykel", "bike");




console.log(myDictionary)

console.log(Object.entries(myDictionary))