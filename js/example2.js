// 2. Skapa ett objekt "car" med egenskaperna make, model, och ett annat objekt "engine" inuti.
// "engine"-objektet ska ha egenskaperna type och horsepower.
const car = {
    make: "Tesla",
    model: "Model 3",
    engine: {
      type: "Electric",
      horsepower: 283
    }
  };
  
  // Uppgift 1: Skriv ut bilens make, model och engine type.
  // Uppgift 2: Ändra motorns hästkrafter till 300 och skriv ut det uppdaterade objektet.
console.log(car.make, car.model, car.engine);
car.engine.horsepower = 300;
console.log(car);


