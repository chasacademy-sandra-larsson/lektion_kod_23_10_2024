// 4. Skapa en array "students" med objekt inuti. Varje objekt ska representera en student med egenskaperna name, grade och age.
const students = [
    { name: "Bob", grade: "B", age: 20 },
    { name: "Sara", grade: "A", age: 22 },
    { name: "John", grade: "A", age: 25 },
    { name: "BArbro", grade: "A", age: 30 },
    { name: "John", grade: "C", age: 23 }
  ];
  
  // Uppgift 1: Filtrera ut studenter med betyget "A" och skriv ut resultatet.
  // Uppgift 2: Använd en loop för att skriva ut varje students namn och betyg.


students.forEach(function (item) {
    console.log(`${item.name} ${item.grade} ${item.age}`)
})

const topStudents = [];
for(let i = 0; i < students.length; i++) {
  if(students[i].grade === "A") {
    topStudents.push(students[i]);
  }
}

// Överkurs - men detta kommer vi använda mycket framöver - map, filter etc är lite best-practice i JS-ramverk mfl 
// const topStudents = students.filter(function (student) {
//   return student.grade === "A";
// })

console.log(topStudents)


