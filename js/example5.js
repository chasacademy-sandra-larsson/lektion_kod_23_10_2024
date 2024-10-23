// 5. Skapa ett objekt "person" med egenskaperna name och age.
// Lägg till en metod "greet" som skriver ut en hälsning med personens namn.
const person = {
    name: "John",
    age: 30,
    greet: function() {
      console.log("Hej, mitt namn är " + this.name);
    }
 
  };
  
  // Uppgift 1: Anropa greet-metoden.
  // Uppgift 2: Ändra namnet och anropa greet-metoden igen.

 person.greet();

 person.name = "Sandra";
 console.log(person.greet());



